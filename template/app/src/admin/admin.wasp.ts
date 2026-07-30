import { page, route, type Spec } from "@wasp.sh/spec";
//import { renderWithRoleAccess } from "../client/roleRoutes";//

import {
  ProtectedAdminButtonsPage,
  ProtectedAdminCalendarPage,
  ProtectedAdminHomePage,
  ProtectedAdminMessagesPage,
  ProtectedAdminSettingsPage,
  ProtectedAdminUsersPage,
} from "./ProtectedRoutes" with { type: "ref" };

export const adminSpec: Spec = [
  route(
    "AdminRoute",
    "/admin",
    page(ProtectedAdminHomePage, { authRequired: true }),
  ),
  route(
    "AdminUsersRoute",
    "/admin/users",
    page(ProtectedAdminUsersPage, { authRequired: true }),
  ),
  route(
    "AdminSettingsRoute",
    "/admin/settings",
    page(ProtectedAdminSettingsPage, { authRequired: true }),
  ),
  route(
    "AdminCalendarRoute",
    "/admin/calendar",
    page(ProtectedAdminCalendarPage, { authRequired: true }),
  ),
  route(
    "AdminUIButtonsRoute",
    "/admin/ui/buttons",
    page(ProtectedAdminButtonsPage, { authRequired: true }),
  ),
  route(
    "AdminMessagesRoute",
    "/admin/messages",
    page(ProtectedAdminMessagesPage, { authRequired: true }),
  ),
];
