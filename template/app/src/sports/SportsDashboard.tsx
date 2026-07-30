import { useQuery } from "wasp/client/operations";
import { Card, CardContent, CardHeader, CardTitle } from "../client/components/ui/card";
import { getAllLeagues, getAllMatches, getSummaryStats } from "./operations";

export function SportsDashboard() {
  const { data: leagues, isLoading: isLeaguesLoading } = useQuery(getAllLeagues);
  const { data: matches, isLoading: isMatchesLoading } = useQuery(getAllMatches);
  const { data: summary, isLoading: isSummaryLoading } = useQuery(getSummaryStats);

  return (
    <div className="space-y-6 p-6">
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Ligas", value: summary?.leagueCount ?? 0 },
          { label: "Equipos", value: summary?.teamCount ?? 0 },
          { label: "Partidos", value: summary?.matchCount ?? 0 },
          { label: "Usuarios", value: summary?.playerCount ?? 0 },
        ].map((item) => (
          <Card key={item.label}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">{item.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{isSummaryLoading ? "..." : item.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ligas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {isLeaguesLoading ? (
              <p className="text-sm text-muted-foreground">Cargando ligas...</p>
            ) : (
              leagues?.map((league: any) => (
                <div key={league.id} className="rounded-lg border p-3">
                  <div className="font-medium">{league.name}</div>
                  <div className="text-sm text-muted-foreground">{league.description ?? "Sin descripción"}</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {league._count?.teams ?? 0} equipos • {league._count?.members ?? 0} miembros • {league._count?.matches ?? 0} partidos
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos partidos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {isMatchesLoading ? (
              <p className="text-sm text-muted-foreground">Cargando partidos...</p>
            ) : (
              matches?.map((match: any) => (
                <div key={match.id} className="rounded-lg border p-3">
                  <div className="text-sm font-medium">{match.homeTeam?.name} vs {match.awayTeam?.name}</div>
                  <div className="text-sm text-muted-foreground">{match.league?.name}</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {new Date(match.scheduledAt).toLocaleString()} • {match.venue ?? "Sin sede"}
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
