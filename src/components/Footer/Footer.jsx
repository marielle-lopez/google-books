import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p className={styles.text}>
        {`Made by Marielle Louisse Lopez\t|\tIcons from icons8.com`}
      </p>
    </footer>
  );
};

export default Footer;
