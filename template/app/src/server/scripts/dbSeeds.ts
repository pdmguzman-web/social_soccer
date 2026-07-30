import { faker } from "@faker-js/faker";
import type { PrismaClient } from "@prisma/client";
import { type User } from "wasp/entities";
import {
  getSubscriptionPaymentPlanIds,
  SubscriptionStatus,
} from "../../payment/plans";

type MockUserData = Omit<User, "id">;

/**
 * This function, which we've imported in `app.db.seeds` in the `main.wasp` file,
 * seeds the database with mock users via the `wasp db seed` command.
 * For more info see: https://wasp.sh/docs/data-model/backends#seeding-the-database
 */
export async function seedMockUsers(prismaClient: PrismaClient) {
  await Promise.all(
    generateMockUsersData(50).map((data) => prismaClient.user.create({ data })),
  );
}

export async function seedDemoData(prismaClient: PrismaClient) {
  const demoUser = await prismaClient.user.upsert({
    where: { email: "demo@socialsoccer.app" },
    update: {
      username: "demo-player",
      role: "player",
      credits: 5,
      subscriptionStatus: "active",
      subscriptionPlan: "pro",
      datePaid: new Date(),
      isAdmin: false,
    },
    create: {
      email: "demo@socialsoccer.app",
      username: "demo-player",
      role: "player",
      credits: 5,
      subscriptionStatus: "active",
      subscriptionPlan: "pro",
      datePaid: new Date(),
      isAdmin: false,
    },
  });

  await prismaClient.playerProfile.upsert({
    where: { userId: demoUser.id },
    update: {
      fullName: "Mateo Alvarez",
      position: "Delantero",
      phone: "+54 11 5555 1234",
      status: "active",
    },
    create: {
      userId: demoUser.id,
      fullName: "Mateo Alvarez",
      position: "Delantero",
      phone: "+54 11 5555 1234",
      status: "active",
    },
  });

  let demoLeague = await prismaClient.league.findFirst({
    where: { name: "Liga Barrial Demo" },
  });

  if (!demoLeague) {
    demoLeague = await prismaClient.league.create({
      data: {
        name: "Liga Barrial Demo",
        description: "Liga de prueba para mostrar el flujo completo del MVP.",
        organizerId: demoUser.id,
        status: "active",
      },
    });
  }

  let demoTeam = await prismaClient.team.findFirst({
    where: { leagueId: demoLeague.id, name: "Los Halcones" },
  });

  if (!demoTeam) {
    demoTeam = await prismaClient.team.create({
      data: {
        leagueId: demoLeague.id,
        name: "Los Halcones",
        captainId: demoUser.id,
      },
    });
  }

  await prismaClient.leagueMember.upsert({
    where: { leagueId_userId: { leagueId: demoLeague.id, userId: demoUser.id } },
    update: { role: "director" },
    create: { leagueId: demoLeague.id, userId: demoUser.id, role: "director" },
  });

  await prismaClient.teamPlayer.upsert({
    where: { teamId_userId: { teamId: demoTeam.id, userId: demoUser.id } },
    update: { isActive: true },
    create: { teamId: demoTeam.id, userId: demoUser.id, isActive: true },
  });

  let demoMatch = await prismaClient.match.findFirst({
    where: { leagueId: demoLeague.id, venue: "Cancha Central" },
  });

  if (!demoMatch) {
    demoMatch = await prismaClient.match.create({
      data: {
        leagueId: demoLeague.id,
        homeTeamId: demoTeam.id,
        awayTeamId: demoTeam.id,
        creatorId: demoUser.id,
        scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
        venue: "Cancha Central",
        fieldNumber: "1",
        refereeName: "Rafael Gomez",
        status: "scheduled",
      },
    });
  }

  await prismaClient.matchEvent.deleteMany({
    where: { matchId: demoMatch.id, userId: demoUser.id },
  });
  await prismaClient.matchEvent.createMany({
    data: [
      {
        matchId: demoMatch.id,
        userId: demoUser.id,
        eventType: "goal",
        minute: 22,
      },
      {
        matchId: demoMatch.id,
        userId: demoUser.id,
        eventType: "assist",
        minute: 40,
      },
      {
        matchId: demoMatch.id,
        userId: demoUser.id,
        eventType: "yellow_card",
        minute: 70,
      },
    ],
  });

  await prismaClient.rewardPoint.deleteMany({
    where: { userId: demoUser.id, OR: [{ reason: "Puntualidad" }, { reason: "Fair play" }] },
  });
  await prismaClient.rewardPoint.createMany({
    data: [
      {
        userId: demoUser.id,
        leagueId: demoLeague.id,
        reason: "Puntualidad",
        points: 150,
      },
      {
        userId: demoUser.id,
        leagueId: demoLeague.id,
        reason: "Fair play",
        points: 80,
      },
    ],
  });

  await prismaClient.rewardRedemption.deleteMany({
    where: { userId: demoUser.id, OR: [{ description: "Canje de incentivo para kit del torneo" }, { description: "Pago parcial de cuota" }] },
  });
  await prismaClient.rewardRedemption.createMany({
    data: [
      {
        userId: demoUser.id,
        pointsUsed: 100,
        description: "Canje de incentivo para kit del torneo",
        status: "approved",
      },
      {
        userId: demoUser.id,
        pointsUsed: 50,
        description: "Pago parcial de cuota",
        status: "paid",
      },
    ],
  });

  await prismaClient.payment.deleteMany({
    where: { userId: demoUser.id, processorRef: "demo-payment" },
  });
  await prismaClient.payment.createMany({
    data: [
      {
        userId: demoUser.id,
        leagueId: demoLeague.id,
        amount: 50,
        currency: "USD",
        type: "registration",
        status: "paid",
        processorRef: "demo-payment",
      },
    ],
  });

  return { demoUser, demoLeague, demoTeam, demoMatch };
}

function generateMockUsersData(numOfUsers: number): MockUserData[] {
  return faker.helpers.multiple(generateMockUserData, { count: numOfUsers });
}

function generateMockUserData(): MockUserData {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const subscriptionStatus =
    faker.helpers.arrayElement<SubscriptionStatus | null>([
      ...Object.values(SubscriptionStatus),
      null,
    ]);
  const now = new Date();
  const createdAt = faker.date.past({ refDate: now });
  const timePaid = faker.date.between({ from: createdAt, to: now });
  const credits = subscriptionStatus
    ? 0
    : faker.number.int({ min: 0, max: 10 });
  const hasUserPaidOnStripe = !!subscriptionStatus || credits > 3;
  return {
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.userName({ firstName, lastName }),
    createdAt,
    isAdmin: false,
    credits,
    subscriptionStatus,
    lemonSqueezyCustomerPortalUrl: null,
    paymentProcessorUserId: hasUserPaidOnStripe
      ? `cus_test_${faker.string.uuid()}`
      : null,
    datePaid: hasUserPaidOnStripe
      ? faker.date.between({ from: createdAt, to: timePaid })
      : null,
    subscriptionPlan: subscriptionStatus
      ? faker.helpers.arrayElement(getSubscriptionPaymentPlanIds())
      : null,
  };
}
