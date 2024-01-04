export default function Image({ imgSrc, imgAlt, title, handleMouse }) {
  return (
    <img src={imgSrc} alt={imgAlt} title={title} onMouseOver={handleMouse} />
  );
}
