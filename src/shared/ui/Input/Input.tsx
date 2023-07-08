import { ChangeEvent, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import cx from "classnames";

import styles from "./Input.module.scss";

type InputType = "text" | "password";

interface InputProps {
  placeholder: string;
  value?: string;
  type?: InputType;
  name?: string;
  className?: string;
  error?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
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
    error,
  } = props;

  const onChangeVisible = () => setIsPasswordVisible((prevState) => !prevState);

  // Так как это необязательный параметр, при отсутствии передаётся undefined
  // Для этого делается проверка, так как в случае undefined, при проверки length выскочит ошибка
  const isValue = Boolean(value && value.length);
  const isError = Boolean(error && error.length);

  const isPassword = baseType === "password";

  // В том случае, если это не пароль (isPassword), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), но он не показывается (isVisible), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), и он показывается (isVisible), передавать text, чтобы пароль показать
  const type = isPassword && isPasswordVisible ? "text" : baseType;

  const mods = {
    [styles.active]: isValue,
    [styles.error]: isError
  };

  return (
    <div className={cx(styles.root, mods, className)}>
      <div className={styles.wrapper}>
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

      {isError && <span className={styles.error}>{error}</span>}
    </div>
  );
}
