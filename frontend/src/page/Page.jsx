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
import styles from "./Page.module.css";
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
    K1: 0,
    K2: 0,
    K3: 0,
    K4: 0,
    K5: 0,
    K6: 0,
    K7: 0,
    K8: 0,
    K9: 0,
    K10: 0,
    K11: 0,
  };

  const creditWorthiness = {
    uK1: 0,
    uK2: 0,
    uK3: 0,
    uK4: 0,
    uK5: 0,
    uK6: 0,
    uK7: 0,
    uK8: 0,
    uK9: 0,
    uK10: 0,
    uK11: 0,
    finalScore: 0,
  };

  return {
    companyName: "",
    date: "",
    form1,
    form2,
    additionalData,
    indicators,
    creditWorthiness,
  };
};

const Page = () => {
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
        form1={data.form1}
        handleChange={handleChange}
        tableStructure={form1Structure}
      />
      <Form2
        form2={data.form2}
        handleChange={handleChange}
        tableStructure={form2Structure}
      />
      <AdditionalDataForm
        additionalData={data.additionalData}
        handleChange={handleChange}
        tableStructure={additionalDataStructure}
      />

      <div className="page-break">
        <Indicators
          indicators={data.indicators}
          creditWorthiness={data.creditWorthiness}
        />
      </div>

      <button className={styles.button} onClick={onClick} disabled={isPending}>
        Зберегти
      </button>
      <List handlePrint={handlePrint} />
    </div>
  );
};

export default Page;
