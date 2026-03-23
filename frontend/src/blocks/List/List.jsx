import styles from "./List.module.css";
import useGetReports from "../../hooks/useGetReports.js";

const List = ({ handlePrint }) => {
  const { reports } = useGetReports();
  return (
    <div id="print-list" className={styles.wrapper}>
      <h1 className={styles.title}>Збережені звіти</h1>
      <ul>
        {reports.map((report) => (
          <li key={report._id} className={styles.list}>
            <span>
              {report.companyName}-
              {new Date(report.date).toLocaleDateString("uk-UA")}
            </span>
            <button
              className={styles.button}
              onClick={() => {
                handlePrint(report);
              }}
            >
              Друкувати
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
