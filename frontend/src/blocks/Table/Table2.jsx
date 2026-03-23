import styles from "./Table.module.css";

const Table2 = ({ data, handleChange, tableStructure }) => {
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
              <td>{row.code}</td>
              <td>{row.label}</td>
              <td>
                <input
                  type="number"
                  name={`${row.key}.forTheReportingPeriod`}
                  value={data[row.key].forTheReportingPeriod}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                />
              </td>
              <td>
                <input
                  type="number"
                  name={`${row.key}.fromTheReportingPeriodOfLastYear`}
                  value={data[row.key].fromTheReportingPeriodOfLastYear}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
