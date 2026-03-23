import styles from "./Table.module.css";

const Table1 = ({ data, handleChange, tableStructure }) => {
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
              <td>{row.code}</td>
              <td>{row.label}</td>
              <td>
                <input
                  type="number"
                  name={`${row.key}.startOfPeriod`}
                  value={data[row.key].startOfPeriod}
                  onChange={handleChange}
                  className={styles.input}
                  onFocus={handleFocus}
                />
              </td>
              <td>
                <input
                  type="number"
                  name={`${row.key}.endOfPeriod`}
                  value={data[row.key].endOfPeriod}
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

export default Table1;
