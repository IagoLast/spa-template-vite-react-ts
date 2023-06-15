import authService from "@/services/auth.service";
import { RouteObject, redirect } from "react-router-dom";
import DashboardPage from "./Dashboard.page";
import MetricsPage from "./pages/Metrics.page";
import TodosPage from "./pages/Todos.page";

export const dashboardRoute: RouteObject = {
  path: "/dashboard",
  Component: DashboardPage,
  loader() {
    if (!authService.isAuthenticated()) {
      return redirect("/login");
    }
    return null;
  },
  children: [
    {
      path: "",
      loader() {
        return redirect("/dashboard/metrics");
      },
    },
    {
      path: "metrics",
      Component: MetricsPage,
    },
    {
      path: "todos",
      Component: TodosPage,
    },
  ],
};
