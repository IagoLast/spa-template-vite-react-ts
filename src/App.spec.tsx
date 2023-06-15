import { render, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import App from "./App";
import authService from "./services/auth.service";

describe("<App />", () => {
  test("should redirect to login when the user is not authenticated", () => {
    vi.spyOn(authService, "isAuthenticated").mockReturnValue(false);

    window.history.pushState({}, "", "/");

    render(<App />);

    return waitFor(() => {
      expect(window.location.pathname).toEqual("/login");
    });
  });

  test("should redirect to dashboard when the user is authenticated", () => {
    vi.spyOn(authService, "isAuthenticated").mockReturnValue(true);
    window.history.pushState({}, "", "/");

    render(<App />);

    return waitFor(() => {
      expect(window.location.pathname).toEqual("/dashboard/metrics");
    });
  });
});
