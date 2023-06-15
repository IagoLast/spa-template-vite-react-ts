import sessionService from "./auth.service";

describe("session.service", () => {
  test("should preserve the authentication state", () => {
    expect(sessionService.isAuthenticated()).toBe(false);

    sessionService.login();

    expect(sessionService.isAuthenticated()).toBe(true);

    sessionService.logout();

    expect(sessionService.isAuthenticated()).toBe(false);
  });
});
