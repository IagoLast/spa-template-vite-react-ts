import authService from "@/services/auth.service";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <section className="min-w-1/2 min-h-1/2 flex flex-col items-center justify-center rounded border border-gray-200 bg-gray-100 p-16 shadow">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Login</h1>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={() => {
            authService.login();
            navigate("/dashboard");
          }}
        >
          Login
        </button>
      </section>
    </main>
  );
}
