export default function Image({
  imgSrc,
  imgAlt,
  title,
  handleMouseOver,
  handleMouseOut,
}) {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      title={title}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
}
