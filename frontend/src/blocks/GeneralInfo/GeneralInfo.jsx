import styles from "./GeneralInfo.module.css";

const GeneralInfo = ({ data, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Загальна інформація</h1>
      <div className={styles.inputGroup}>
        <label htmlFor="companyName" className={styles.label}>
          Назва компанії
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="date" className={styles.label}>
          Кількість продукції
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={data.date}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
