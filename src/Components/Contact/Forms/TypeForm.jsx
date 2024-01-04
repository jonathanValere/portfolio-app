import styles from "./TypeForm.module.css";
import Label from "./Label";

export default function TypeForm({ ...props }) {
  return (
    <>
      <Label label={props.name}>
        {props.type === "text" && (
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            className={styles.input}
            placeholder={props.name === "prenom" ? "Votre prénom" : "Votre nom"}
          />
        )}
        {props.type === "email" && (
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            className={styles.input}
            placeholder="Votre adresse mail"
          />
        )}
        {props.type === "select" && (
          <select name={props.name} id="sujet" onChange={props.onChange}>
            <option value="choice">-- Choisissez le sujet --</option>
            <option value="emploi">emploi</option>
            <option value="experience">expérience</option>
          </select>
        )}
        {props.type === "textarea" && (
          <select name={props.name} id="sujet" onChange={props.onChange}>
            <option value="choice">--</option>
            <option value="emploi">emploi</option>
            <option value="experience">expérience</option>
          </select>
        )}
      </Label>
    </>
  );
}
