import styles from "./Card.module.scss";

const Card = ({ title, authors, description, imageURL }) => {
  return (
    <article className={styles.wrapper}>
      <img className={styles.img} src={imageURL} alt={`${title} book cover`} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.authors}>{authors.join(", ")}</p>
        <p className={styles.description}>
          {description ? description.slice(0, 130) + "..." : "No description"}
        </p>
      </div>
    </article>
  );
};

export default Card;
