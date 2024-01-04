export default function Section({ color, id, children }) {
  return (
    <section className={color} id={id}>
      {children}
    </section>
  );
}
