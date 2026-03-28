import styles from "./Forms.module.css";

const Form2 = ({ data, handleChange, tableStructure }) => {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Звіт про фінансові результати (Звіт про сукупний дохід)
      </h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Код рядка</th>
            <th>Назва</th>
            <th>За звітний період</th>
            <th>За аналогічний період попереднього року</th>
          </tr>
        </thead>
        <tbody>
          {tableStructure.map((row) => (
            <tr key={row.code}>
              <td
                style={{
                  fontWeight: row.isUsedInIndicators ? "bold" : "normal",
                }}
              >
                {row.code}
              </td>
              <td
                style={{
                  fontWeight: row.isUsedInIndicators ? "bold" : "normal",
                }}
              >
                {row.label}
              </td>
              <td>
                <input
                  type="text"
                  name={`form2.${row.code}.current`}
                  value={data.form2[row.code].current}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                  readOnly={row.isCalculated}
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`form2.${row.code}.previous`}
                  value={data.form2[row.code].previous}
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

export default Form2;
