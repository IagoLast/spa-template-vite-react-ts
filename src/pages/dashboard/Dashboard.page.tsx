import authService from "@/services/auth.service";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col bg-gray-100  dark:bg-gray-800 md:h-screen md:flex-row">
      <aside className="flex flex-col items-center justify-center border-r border-gray-200 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 md:h-screen md:w-64">
        <NavLink to="/dashboard/metrics">Metrics</NavLink>
        <NavLink to="/dashboard/todos">Todos</NavLink>
        <button
          className="mt-4 rounded bg-red-500 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
          onClick={() => {
            authService.logout();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </aside>
      <section className="flex h-full w-full items-center justify-center p-4">
        <Outlet />
      </section>
    </main>
  );
}
