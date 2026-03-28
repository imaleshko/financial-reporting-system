import styles from "./Forms.module.css";

export const Indicators = ({ indicators }) => {
  const format = (number) => Number(number || 0).toFixed(2);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Фінансові показники</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Код</th>
            <th>Назва</th>
            <th>На початок / Звітний</th>
            <th>На кінець / Попередній</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>K1</td>
            <td>Коефіцієнт миттєвої ліквідності</td>
            <td>{format(indicators.K1.start)}</td>
            <td>{format(indicators.K1.end)}</td>
          </tr>
          <tr>
            <td>K2</td>
            <td>Коефіцієнт поточної ліквідності</td>
            <td>{format(indicators.K2.start)}</td>
            <td>{format(indicators.K2.end)}</td>
          </tr>
          <tr>
            <td>K3</td>
            <td>Коефіцієнт загальної ліквідності</td>
            <td>{format(indicators.K3.start)}</td>
            <td>{format(indicators.K3.end)}</td>
          </tr>
          <tr>
            <td>K4</td>
            <td>Коефіцієнт фінансової незалежності</td>
            <td>{format(indicators.K4.start)}</td>
            <td>{format(indicators.K4.end)}</td>
          </tr>
          <tr>
            <td>K5</td>
            <td>Коефіцієнт маневреності власних коштів</td>
            <td>{format(indicators.K5.start)}</td>
            <td>{format(indicators.K5.end)}</td>
          </tr>
          <tr>
            <td>K6</td>
            <td>Коефіцієнт рентабельності виробництва</td>
            <td>{format(indicators.K6.current)}</td>
            <td>{format(indicators.K6.previous)}</td>
          </tr>
          <tr>
            <td>K7</td>
            <td>Коефіцієнт діяльності минулих років</td>
            <td colSpan={2}>{indicators.K7}</td>
          </tr>
          <tr>
            <td>K8</td>
            <td>Коефіцієнт найбільшої суми раніше повернутого кредиту</td>
            <td colSpan={2}>{format(indicators.K8)}</td>
          </tr>
          <tr>
            <td>K9</td>
            <td>Критерій термін існування підприємства</td>
            <td colSpan={2}>{indicators.K9}</td>
          </tr>
          <tr>
            <td>K10</td>
            <td>
              Коефіцієнт питомої ваги коштів підприємства у вартості кредитного
              проекту
            </td>
            <td colSpan={2}>{format(indicators.K10)}</td>
          </tr>
          <tr>
            <td>K11</td>
            <td>Коефіцієнт наявності власного ліквідного майна</td>
            <td colSpan={2}>{format(indicators.K11)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
