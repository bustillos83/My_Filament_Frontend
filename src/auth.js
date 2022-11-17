import { createAuthProvider } from "react-token-auth";

let baseUrl = "http://localhost:8000";

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  getAccessTokenKey: "access_token",
  onUpdateToken: (token) =>
    fetch(baseUrl + "/auth/refresh", {
      method: "POST",
      body: token.refresh_token,
    }).then((r) => r.json()),
});
