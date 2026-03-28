import styles from "./Forms.module.css";

const Form1 = ({ data, handleChange, tableStructure }) => {
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Баланс (Звіт про фінансовий стан)</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Код рядка</th>
            <th>Назва</th>
            <th>На початок звітного періоду</th>
            <th>На кінець звітного періоду</th>
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
                  name={`form1.${row.code}.start`}
                  value={data.form1[row.code].start}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                  readOnly={row.isCalculated}
                />
              </td>
              <td>
                <input
                  type="text"
                  name={`form1.${row.code}.end`}
                  value={data.form1[row.code].end}
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

export default Form1;
