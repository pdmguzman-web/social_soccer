import { type ReactNode } from "react";
import { RoleRouteGuard, type UserRole } from "./components/RoleRouteGuard";

export function renderWithRoleAccess({
  children,
  allowedRoles,
  fallbackPath,
}: {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallbackPath?: string;
}) {
  return (
    <RoleRouteGuard allowedRoles={allowedRoles} fallbackPath={fallbackPath}>
      {children}
    </RoleRouteGuard>
  );
}
