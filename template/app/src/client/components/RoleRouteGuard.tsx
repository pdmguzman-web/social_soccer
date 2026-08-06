import { Navigate } from "react-router";
// @ts-ignore
import { useAuth } from "wasp/client/auth";
import type { ReactNode } from "react";

export type UserRole = "player" | "director" | "admin";

export function RoleRouteGuard({
  children,
  allowedRoles,
  fallbackPath = "/demo-app",
}: {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallbackPath?: string;
}) {
  const { data: user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="p-6 text-sm text-muted-foreground">Cargando acceso...</div>;
  }

  const role = ((user?.role as string | undefined) ?? "player") as UserRole;

  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <>{children}</>;
}
