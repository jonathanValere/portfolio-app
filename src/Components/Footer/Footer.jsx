import styles from "./Footer.module.css";
let currentDateYear = new Date().getFullYear();

export default function Footer() {
  return (
    <section className={styles.section}>
      <p className={styles.p}>
        © {currentDateYear} | Jonathan VALERE | Télécharger CV
      </p>
    </section>
  );
}
