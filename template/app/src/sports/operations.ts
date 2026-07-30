import { HttpError, prisma } from "wasp/server";
import type { GetAllLeagues, GetAllMatches, GetLeagueById } from "wasp/server/operations";

export const getAllLeagues: GetAllLeagues<void, any[]> = async (_args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Only authenticated users are allowed to access leagues");
  }

  return context.entities.League.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      organizer: { select: { id: true, username: true, email: true } },
      _count: { select: { teams: true, members: true, matches: true } },
    },
  });
};

export const getLeagueById: GetLeagueById<{ id: string }, any> = async (args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Only authenticated users are allowed to access league details");
  }

  return context.entities.League.findUniqueOrThrow({
    where: { id: args.id },
    include: {
      organizer: { select: { id: true, username: true, email: true } },
      teams: true,
      members: true,
      matches: {
        orderBy: { scheduledAt: "asc" },
      },
    },
  });
};

export const getAllMatches: GetAllMatches<void, any[]> = async (_args, context) => {
  if (!context.user) {
    throw new HttpError(401, "Only authenticated users are allowed to access matches");
  }

  return context.entities.Match.findMany({
    orderBy: { scheduledAt: "asc" },
    include: {
      league: { select: { id: true, name: true } },
      homeTeam: { select: { id: true, name: true } },
      awayTeam: { select: { id: true, name: true } },
    },
  });
};

export const getSummaryStats = async (_args: void, context: any) => {
  if (!context.user) {
    throw new HttpError(401, "Only authenticated users are allowed to access summary stats");
  }

  const [leagueCount, teamCount, matchCount, playerCount] = await Promise.all([
    prisma.league.count(),
    prisma.team.count(),
    prisma.match.count(),
    prisma.user.count(),
  ]);

  return { leagueCount, teamCount, matchCount, playerCount };
};
