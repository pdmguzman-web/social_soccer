import { query, route, type Spec, page } from "@wasp.sh/spec";
import { RoleDashboard } from "../client/components/RoleDashboard" with { type: "ref" };
import { getAllLeagues, getAllMatches, getLeagueById, getSummaryStats } from "./operations" with { type: "ref" };

export const sportsSpec: Spec = [
  route("SportsHomeRoute", "/sports", page(RoleDashboard, { authRequired: true })),
  query(getAllLeagues, { entities: ["League", "User"] }),
  query(getLeagueById, { entities: ["League", "User", "Team", "Match"] }),
  query(getAllMatches, { entities: ["Match", "League", "Team"] }),
  query(getSummaryStats, { entities: ["League", "Team", "Match", "User"] }),
];
