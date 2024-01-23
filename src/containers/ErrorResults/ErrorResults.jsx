import React from "react";
import styles from "./ErrorResults.module.scss";
import Button from "../../components/Button/Button";

const ErrorResults = ({ message }) => {
  return (
    <>
      <img
        className={styles.icon}
        src="src\assets\not-found.png"
        alt="Not found icon"
      />
      <p className={styles.text}>{message}</p>
      <a href="/">
        <Button type={"primary"} label={"Reset search"} />
      </a>
    </>
  );
};

export default ErrorResults;
