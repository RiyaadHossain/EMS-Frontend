import { jwtDecode } from "jwt-decode";
import { getToken } from "./localStorage";
import { CustomJwtPayload } from "@/interfaces/jwt";

export const getUserInfo = (): CustomJwtPayload => {
  const token = getToken();
  if(!token) return

  const info = jwtDecode(token);
  //@ts-ignore
  return info;
};
