const Card = ({ title, authors, description, imageURL }) => {
  return (
    <div>
      <img src={imageURL} alt={`${title} book cover`} />
      <h3>{title}</h3>
      {authors.map((author) => (
        <p key={author}>{author}</p>
      ))}
      <p>
        {description ? description.slice(0, 130) + "..." : "No description"}
      </p>
    </div>
  );
};

export default Card;
