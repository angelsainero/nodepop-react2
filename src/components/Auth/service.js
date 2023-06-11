import client, {
  removeAuthorizationheader,
  setAuthorizationHeader,
} from "../../api/client";
import storage from "../../utils/storage";

export const login = (credentials) => {
  return client.post("api/auth/login", credentials).then(({accessToken}) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken, { type: "sessionStorage" });
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationheader();
    storage.remove("auth");
  });
};
