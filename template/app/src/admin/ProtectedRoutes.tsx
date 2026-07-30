import { RoleRouteGuard } from "../client/components/RoleRouteGuard";
import { AnalyticsDashboardPage } from "./dashboards/analytics/AnalyticsDashboardPage";
import { MessagesPage } from "./dashboards/messages/MessagesPage";
import { UsersDashboardPage } from "./dashboards/users/UsersDashboardPage";
import { CalendarPage } from "./elements/calendar/CalendarPage";
import { SettingsPage } from "./elements/settings/SettingsPage";
import { ButtonsPage } from "./elements/ui-elements/ButtonsPage";

export function ProtectedAdminHomePage() {
  return (
    <RoleRouteGuard allowedRoles={["director", "admin"]} fallbackPath="/demo-app">
      <AnalyticsDashboardPage />
    </RoleRouteGuard>
  );
}

export function ProtectedAdminUsersPage() {
  return (
    <RoleRouteGuard allowedRoles={["admin"]} fallbackPath="/demo-app">
      <UsersDashboardPage />
    </RoleRouteGuard>
  );
}

export function ProtectedAdminSettingsPage() {
  return (
    <RoleRouteGuard allowedRoles={["admin"]} fallbackPath="/demo-app">
      <SettingsPage />
    </RoleRouteGuard>
  );
}

export function ProtectedAdminCalendarPage() {
  return (
    <RoleRouteGuard allowedRoles={["admin"]} fallbackPath="/demo-app">
      <CalendarPage />
    </RoleRouteGuard>
  );
}

export function ProtectedAdminButtonsPage() {
  return (
    <RoleRouteGuard allowedRoles={["admin"]} fallbackPath="/demo-app">
      <ButtonsPage />
    </RoleRouteGuard>
  );
}

export function ProtectedAdminMessagesPage() {
  return (
    <RoleRouteGuard allowedRoles={["admin"]} fallbackPath="/demo-app">
      <MessagesPage />
    </RoleRouteGuard>
  );
}
