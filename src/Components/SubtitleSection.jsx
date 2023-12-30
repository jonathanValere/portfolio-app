export default function SubtitleSection({ subtitle, color }) {
  return (
    <>
      <h2 className={color}>{subtitle}</h2>
      <p className="shadow-title">{subtitle}</p>
    </>
  );
}
