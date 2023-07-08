import * as Yup from "yup";

export function loginInitialValues() {
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
    password: Yup.string().min(4, "Минимальный пароль 4 символа").max(40, "Максимальный пароль 40 символов").required("Обязательное поле"),
  })
}
