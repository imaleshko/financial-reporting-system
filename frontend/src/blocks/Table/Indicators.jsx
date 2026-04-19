import styles from "./Forms.module.css";

export const Indicators = ({ indicators, creditWorthiness }) => {
  const format = (number) => Number(number || 0).toFixed(2);

  const level = (finalScore) => {
    let level;

    if (finalScore > 0.57) {
      level = (
        <div className={styles.green}>
          Найвищий рівень кредитоспроможності(рейтинг ААА, АА)
        </div>
      );
    } else if (finalScore > 0.37) {
      level = (
        <div className={styles.lightGreen}>
          Висока кредитоспроможність (рейтинг А, ВВВ)
        </div>
      );
    } else if (finalScore > 0.19) {
      level = (
        <div className={styles.orange}>
          Спекулятивний рейтинг (рейтинг ВВ, В)
        </div>
      );
    } else if (finalScore > 0.11) {
      level = (
        <div className={styles.yellow}>Можливий дефолт (рейтинг ССС)</div>
      );
    } else {
      level = (
        <div className={styles.red}>Дефолт неминучий (рейтинг С, RD, D)</div>
      );
    }

    return level;
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Фінансові показники</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Група</th>
            <th>Код</th>
            <th>Назва</th>
            <th>Оцінка</th>
            <th>Функція належності</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={5}>G1</td>
            <td>K1</td>
            <td>Коефіцієнт миттєвої ліквідності</td>
            <td>{format(indicators.K1)}</td>
            <td>{creditWorthiness.uK1}</td>
          </tr>
          <tr>
            <td>K2</td>
            <td>Коефіцієнт поточної ліквідності</td>
            <td>{format(indicators.K2)}</td>
            <td>{creditWorthiness.uK2}</td>
          </tr>
          <tr>
            <td>K3</td>
            <td>Коефіцієнт загальної ліквідності</td>
            <td>{format(indicators.K3)}</td>
            <td>{creditWorthiness.uK3}</td>
          </tr>
          <tr>
            <td>K4</td>
            <td>Коефіцієнт фінансової незалежності</td>
            <td>{format(indicators.K4)}</td>
            <td>{creditWorthiness.uK4}</td>
          </tr>
          <tr>
            <td>K5</td>
            <td>Коефіцієнт маневреності власних коштів</td>
            <td>{format(indicators.K5)}</td>
            <td>{creditWorthiness.uK5}</td>
          </tr>
          <tr>
            <td rowSpan={3}>G2</td>
            <td>K6</td>
            <td>Коефіцієнт рентабельності виробництва</td>
            <td>{format(indicators.K6)}</td>
            <td>{creditWorthiness.uK6}</td>
          </tr>
          <tr>
            <td>K7</td>
            <td>Коефіцієнт діяльності минулих років</td>
            <td>{indicators.K7}</td>
            <td>{creditWorthiness.uK7}</td>
          </tr>
          <tr>
            <td>K8</td>
            <td>Коефіцієнт найбільшої суми раніше повернутого кредиту</td>
            <td>{format(indicators.K8)}</td>
            <td>{creditWorthiness.uK8}</td>
          </tr>
          <tr>
            <td rowSpan={3}>G3</td>
            <td>K9</td>
            <td>Критерій термін існування підприємства</td>
            <td>{indicators.K9}</td>
            <td>{creditWorthiness.uK9}</td>
          </tr>
          <tr>
            <td>K10</td>
            <td>
              Коефіцієнт питомої ваги коштів підприємства у вартості кредитного
              проекту
            </td>
            <td>{format(indicators.K10)}</td>
            <td>{creditWorthiness.uK10}</td>
          </tr>
          <tr>
            <td>K11</td>
            <td>Коефіцієнт наявності власного ліквідного майна</td>
            <td>{format(indicators.K11)}</td>
            <td>{creditWorthiness.uK11}</td>
          </tr>
        </tbody>
      </table>

      {creditWorthiness?.finalScore > 0 && (
        <table className={`${styles.table} ${styles.tableResults}`}>
          <thead>
            <tr>
              <th>Агрегована оцінка</th>
              <th>Рейтинг</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{creditWorthiness.finalScore}</td>
              <td>{level(creditWorthiness.finalScore)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
