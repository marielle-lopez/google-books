import styles from "./FlexWrapper.module.scss";

const FlexWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default FlexWrapper;
