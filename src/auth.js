import { createAuthProvider } from "react-token-auth";

let baseUrl = process.env.REACT_APP_BACKEND_URL;

export const { useAuth, authFetch, login, logout } = createAuthProvider({
  accessTokenKey: "access_token",
  onUpdateToken: (token) =>
    fetch(baseUrl + "/auth/refresh", {
      method: "POST",
      body: token.refresh_token,
    }).then((r) => r.json()),
});
