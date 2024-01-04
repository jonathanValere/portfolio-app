import styles from "./Label.module.css";

export default function Label({ label, children }) {
  return (
    <>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      {children}
    </>
  );
}
