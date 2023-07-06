import React from "react";
import styles from "./button.module.scss";

function onClick() {
  console.log("Attempt to login user");
}

interface ButtonProps {
  children?: string;
}

export function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <div>
      <button onClick={onClick} className={styles.root}>
        <span className={styles.btnText}>{children}</span>
      </button>
    </div>
  );
}
