import styles from "./SaveButton.module.css";

const SaveButton = ({ onClick, isPending }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={isPending}>
      Зберегти
    </button>
  );
};

export default SaveButton;
