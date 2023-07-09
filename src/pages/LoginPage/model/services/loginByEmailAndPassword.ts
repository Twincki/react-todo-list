import { $api } from "shared/api/api";
import { LoginValues } from "../formik/login";
import { saveCookie } from "shared/cookies/cookies";

export async function loginByEmailAndPassword ({ email, password }: LoginValues, formik: any) {
  try {
    const { data } = await $api.post("/auth/login", { email, password });
    saveCookie("loginId", data.id);
  } catch (error) {
    const message = error.response.data.message;

    formik.setErrors({ email: message, password: message });
    throw new Error(message);
  }
}