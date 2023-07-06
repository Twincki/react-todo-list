import { ChangeEvent, useState } from "react";
import cx from "classnames";
import { BiShow, BiHide } from 'react-icons/bi';

import styles from "./Input.module.scss";

type InputType = "text" | "password";

interface InputProps {
  value?: string;
  placeholder: string;
  type?: InputType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { placeholder, value, onChange, type: baseType = "text" } = props;

  const onChangeVisible = () => setIsVisible((prevState) => !prevState);

  // Так как это необязательный параметр, при отсутсвии передаётся undefined
  // Для этого делается проверка, так как в случае undefined, при проверки legnth выскачит ошибка
  const isValue = Boolean(value && value.length);

  const isPassword = baseType === "password";

  // В том случае, если это не пароль (isPassword), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), но он не показывается (isVisible), показываешь базовый тип (InputType)
  // В том случае, если это пароль (isPassword), и он показывается (isVisible), передавать text, чтобы пароль показать
  const type = isPassword && isVisible ? "text" : baseType;

  const mods = { [styles.active]: isValue };

  return (
    <div className={cx(styles.root, mods)}>
      <span className={styles.span}>{placeholder}</span>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
      />

      {isPassword && (
        <span className={cx({ [styles.visible]: isVisible })} onClick={onChangeVisible}>
          <BiShow size={23} className={cx(styles.icon, styles.show)} />
          <BiHide size={23} className={cx(styles.icon, styles.hide)} />
        </span>
      )}
    </div>
  );
}
