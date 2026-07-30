import { useAuth } from "wasp/client/auth";
import { SportsDashboard } from "../../sports/SportsDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function RoleDashboard() {
  const { data: user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="p-6 text-sm text-muted-foreground">Cargando panel...</div>;
  }

  const role = (user?.role as string | undefined) ?? "player";

  if (role === "director" || role === "admin") {
    return <SportsDashboard />;
  }

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Panel del Jugador</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>Consulta tu perfil, partidos, estadísticas y recompensas desde un único lugar.</p>
        </CardContent>
      </Card>
    </div>
  );
}
