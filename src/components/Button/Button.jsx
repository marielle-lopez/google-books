import styles from "./Button.module.scss";

const Button = ({ label, type }) => {
  const classes = [styles.button];

  if (type === "primary") {
    classes.push(styles.button_primary);
  }

  if (type === "secondary") {
    classes.push(styles.button_secondary);
  }

  return <button className={classes.join(" ")}>{label}</button>;
};

export default Button;
