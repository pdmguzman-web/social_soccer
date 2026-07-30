import { LayoutDashboard, Settings, Shield, Users } from "lucide-react";
import { routes } from "wasp/client/router";

export const userMenuItems = [
  {
    name: "Panel Principal",
    to: routes.DemoAppRoute.to,
    icon: LayoutDashboard,
    isAdminOnly: false,
    isDirectorOnly: false,
    isAuthRequired: true,
  },
  {
    name: "Mi Perfil",
    to: routes.AccountRoute.to,
    icon: Settings,
    isAuthRequired: false,
    isAdminOnly: false,
    isDirectorOnly: false,
  },
  {
    name: "Gestión de Liga",
    to: routes.AdminRoute.to,
    icon: Users,
    isAuthRequired: false,
    isAdminOnly: false,
    isDirectorOnly: true,
  },
  {
    name: "Admin Dashboard",
    to: routes.AdminRoute.to,
    icon: Shield,
    isAuthRequired: false,
    isAdminOnly: true,
    isDirectorOnly: false,
  },
] as const;
