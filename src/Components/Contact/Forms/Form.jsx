import styles from "./Form.module.css";
import TypeForm from "./TypeForm";
import TextArea from "./TextArea";
import Button from "../../Button/Button";

export default function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.target);
    const datas = Object.fromEntries(values.entries());
    return alert(datas);
  };

  return (
    <form action="" onSubmit={handleSubmit} className={styles.form}>
      <TypeForm type="text" name="prenom" />
      <TypeForm type="text" name="nom" />
      <TypeForm type="email" name="email" />
      <TypeForm type="select" name="objet" />
      <TextArea name="message" />
      <Button type="submit" className={styles["btn-submit"]}>
        Envoyer
      </Button>
    </form>
  );
}
