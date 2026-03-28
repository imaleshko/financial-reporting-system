import styles from "./Forms.module.css";

const AdditionalDataForm = ({ data, handleChange, tableStructure }) => {
  const handleFocus = (e) => {
    e.target.select();
  };
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Додаткова інформація</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Код рядка</th>
            <th>Назва</th>
            <th colSpan={2}>Показник</th>
          </tr>
        </thead>
        <tbody>
          {tableStructure.map((row) => (
            <tr key={row.code}>
              <td>{row.code}</td>
              <td>{row.label}</td>
              <td colSpan={2}>
                <input
                  type="text"
                  name={`additionalData.${row.code}`}
                  value={data.additionalData[row.code]}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                  readOnly={row.isCalculated}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdditionalDataForm;
