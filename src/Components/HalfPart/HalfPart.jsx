import styles from "./HalfPart.module.css";

export default function HalfPart({ ...props }) {
  return (
    <aside
      className={`${styles.halfPart} ${styles[props.backColor]} ${
        styles[props.color]
      }`}
    >
      <div className="container">{props.children}</div>
    </aside>
  );
}
