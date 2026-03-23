import styles from "./Table.module.css";

const Table3 = ({ data, handleChange, tableStructure }) => {
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
                  type="number"
                  name={row.key}
                  value={data[row.key]}
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

export default Table3;
