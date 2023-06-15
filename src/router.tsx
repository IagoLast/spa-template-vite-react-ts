import { RouteObject, redirect } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import { dashboardRoute } from "./pages/dashboard/dashboard.route";
import authService from "./services/auth.service";

export const router: RouteObject[] = [
  {
    Component: () => <></>,
    path: "/",
    loader() {
      return redirect("/dashboard");
    },
  },
  {
    path: "/login",
    Component: LoginPage,
    loader() {
      if (authService.isAuthenticated()) {
        return redirect("/dashboard");
      }
      return null;
    },
  },
  dashboardRoute,
];
