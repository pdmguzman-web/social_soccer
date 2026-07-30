import { HttpError, prisma } from "wasp/server";

export const getPlayerProfileSummary = async (_args: void, context: any) => {
  if (!context.user) {
    throw new HttpError(401, "Only authenticated users are allowed to view player stats");
  }

  const profile = await prisma.playerProfile.findUnique({
    where: { userId: context.user.id },
    include: { user: { select: { id: true, username: true, email: true, role: true } } },
  });

  const matches = await prisma.matchEvent.findMany({
    where: { userId: context.user.id },
    orderBy: { createdAt: "desc" },
  });

  const goals = matches.filter((event: any) => event.eventType === "goal").length;
  const assists = matches.filter((event: any) => event.eventType === "assist").length;
  const cards = matches.filter((event: any) => ["yellow_card", "red_card"].includes(event.eventType)).length;

  const points = await prisma.rewardPoint.aggregate({
    where: { userId: context.user.id },
    _sum: { points: true },
  });

  return {
    profile,
    stats: {
      goals,
      assists,
      cards,
      totalPoints: points._sum.points ?? 0,
    },
  };
};
