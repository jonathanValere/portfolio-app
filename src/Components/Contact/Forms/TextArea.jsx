import Label from "./Label";
import styles from "./TextArea.module.css";

export default function TextArea({ ...props }) {
  return (
    <Label label="Message">
      <textarea
        name={props.name}
        id={props.id}
        className={styles.textArea}
        rows="10"
        cols="33"
        placeholder="Rédiger votre message..."
      />
    </Label>
  );
}
