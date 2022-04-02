import { reflectKeys } from "@/app/shared/services";
const namespacedPrefix = "[AUTH]";

const mutationTypes = reflectKeys(
  [
    "AUTHUSER",
    "CLEAR_AUTH",
    "SIGNUP",
    "LOGIN",
    "LOGOUT",
    "AUTO_LOGIN",
    "RESET_PASSWORD",
    "FORGOT_PASSWORD"
  ],
  namespacedPrefix
);

export const {
  AUTHUSER,
  CLEAR_AUTH,
  SIGNUP,
  LOGIN,
  LOGOUT,
  AUTO_LOGIN,
  RESET_PASSWORD,
  FORGOT_PASSWORD
} = mutationTypes;

