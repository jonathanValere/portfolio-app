import styles from "./StackTechno.module.css";

export default function StackTechno({ title, children, techno }) {
  return (
    <div className={styles.stack}>
      <p>
        <strong className={styles.important}>{title}</strong>
      </p>
      <div className="wrapper-icons">{children}</div>
      <p>{techno}</p>
    </div>
  );
}
