import { query, type Spec } from "@wasp.sh/spec";
import { getPlayerProfileSummary } from "./playerProfileOperations" with { type: "ref" };

export const playerProfileSpec: Spec = [
  query(getPlayerProfileSummary, { entities: ["User", "PlayerProfile", "MatchEvent", "RewardPoint"] }),
];
