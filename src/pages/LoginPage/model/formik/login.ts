import * as Yup from "yup";

export interface LoginValues {
  email: string;
  password: string;
}

export function loginInitialValues(): LoginValues {
  return {
    email: "",
    password: "",
  }
}

export function loginValidationSchema() {
  return Yup.object().shape({
    email: Yup.string()
      .email("Неверный формат электронной почты")
      .required("Обязательное поле"),
    password: Yup.string().min(5, "Минимальный пароль 5 символов").max(40, "Максимальный пароль 40 символов").required("Обязательное поле"),
  })
}
