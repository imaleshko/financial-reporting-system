import "./print.css";
import { useMemo, useState } from "react";
import GeneralInfo from "../blocks/GeneralInfo/GeneralInfo.jsx";
import Form1 from "../blocks/Table/Form1.jsx";
import Form2 from "../blocks/Table/Form2.jsx";
import AdditionalDataForm from "../blocks/Table/AdditionalDataForm.jsx";
import { form1Structure } from "../blocks/Table/TableStructures/form1Structure.js";
import { form2Structure } from "../blocks/Table/TableStructures/form2Structure.js";
import { additionalDataStructure } from "../blocks/Table/TableStructures/additionalDataStructure.js";
import usePostReport from "../hooks/usePostReport.js";
import List from "../blocks/List/List.jsx";
import { flushSync } from "react-dom";
import styles from "./Home.module.css";
import { calculate } from "../utils/calculation.js";
import { Indicators } from "../blocks/Table/Indicators.jsx";

const generateInitialState = () => {
  const form1 = {};
  form1Structure.forEach((row) => {
    form1[row.code] = {
      start: "",
      end: "",
    };
  });

  const form2 = {};
  form2Structure.forEach((row) => {
    form2[row.code] = {
      current: "",
      previous: "",
    };
  });

  const additionalData = {};
  additionalDataStructure.forEach((row) => {
    additionalData[row.code] = "";
  });

  const indicators = {
    K1: { start: 0, end: 0 },
    K2: { start: 0, end: 0 },
    K3: { start: 0, end: 0 },
    K4: { start: 0, end: 0 },
    K5: { start: 0, end: 0 },
    K6: { current: 0, previous: 0 },
    K7: 0,
    K8: 0,
    K9: 0,
    K10: 0,
    K11: 0,
  };

  return {
    companyName: "",
    date: "",
    form1,
    form2,
    additionalData,
    indicators,
  };
};

const Home = () => {
  const initialState = useMemo(() => generateInitialState(), []);
  const [data, setData] = useState(initialState);
  const { save, isPending } = usePostReport();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      let data = { ...prevData };
      const keys = name.split(".");

      if (keys[0] === "form1" || keys[0] === "form2") {
        data[keys[0]] = {
          ...data[keys[0]],
          [keys[1]]: { ...data[keys[0]][keys[1]], [keys[2]]: value },
        };
      } else if (keys[0] === "additionalData") {
        data.additionalData = { ...data.additionalData, [keys[1]]: value };
      } else {
        data[name] = value;
      }

      return calculate(data);
    });
  };

  const onClick = () => {
    save(data, {
      onSuccess: () => {
        setData(initialState);
      },
    });
  };

  const handlePrint = (report) => {
    flushSync(() => {
      setData(report);
    });
    window.print();
    setData(initialState);
  };

  return (
    <div>
      <GeneralInfo data={data} handleChange={handleChange} />
      <Form1
        data={data}
        handleChange={handleChange}
        tableStructure={form1Structure}
      />
      <Form2
        data={data}
        handleChange={handleChange}
        tableStructure={form2Structure}
      />
      <AdditionalDataForm
        data={data}
        handleChange={handleChange}
        tableStructure={additionalDataStructure}
      />
      <div className="page-break">
        <Indicators indicators={data.indicators} />
      </div>

      <button className={styles.button} onClick={onClick} disabled={isPending}>
        Зберегти
      </button>
      <List handlePrint={handlePrint} />
    </div>
  );
};

export default Home;
