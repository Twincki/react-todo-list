import { ChangeEvent, useState } from "react";
import cx from "classnames";
import { BiShow, BiHide } from "react-icons/bi";

import styles from "./Input.module.scss";

type InputType = "text" | "password";

interface InputProps {
  value?: string;
  placeholder: string;
  type?: InputType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
}

export function Input(props: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const {
    placeholder,
    value,
    onChange,
    type: baseType = "text",
    className,
    name,
  } = props;

  const onChangeVisible = () => setIsPasswordVisible((prevState) => !prevState);

  // Так как это необязательный параметр, при отсутствии передаётся undefined
  // Для этого делается проверка, так как в случае undefined, при проверки length выскочит ошибка
  const isValue = Boolean(value && value.length);

  const isPassword = baseType === "password";

  // В том случае, если это не пароль (isPassword), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), но он не показывается (isVisible), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), и он показывается (isVisible), передавать text, чтобы пароль показать
  const type = isPassword && isPasswordVisible ? "text" : baseType;

  const mods = { [styles.active]: isValue };

  return (
    <div className={cx(styles.root, mods, className)}>
      <span className={styles.span}>{placeholder}</span>
      <input
        name={name}
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      />

      {isPassword && (
        <span
          className={cx({ [styles.visible]: isPasswordVisible })}
          onClick={onChangeVisible}
        >
          <BiShow size={23} className={cx(styles.icon, styles.show)} />
          <BiHide size={23} className={cx(styles.icon, styles.hide)} />
        </span>
      )}
    </div>
  );
}
