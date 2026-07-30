import { Outlet } from "react-router";
import { type User as UserEntity } from "wasp/entities";
import { RoleDashboard } from "./components/RoleDashboard";

export function RoleBasedHomePage() {
  return <RoleDashboard />;
}

export function RoleAwareLayout() {
  return <Outlet />;
}

export function getRoleLabel(user?: Partial<UserEntity>) {
  const role = (user?.role as string | undefined) ?? "player";
  if (role === "admin") return "Admin";
  if (role === "director") return "Director";
  return "Jugador";
}
