import calculateCreditWorthiness from "./calculationCreditWorthiness.js";

const calculateForm1 = (form1) => {
  const updatedForm1 = { ...form1 };
  const periods = ["start", "end"];

  periods.forEach((period) => {
    const value = (code) => Number(updatedForm1[code]?.[period] || 0);

    updatedForm1["1000"] = {
      ...updatedForm1["1000"],
      [period]: value("1001") - value("1002"),
    };
    updatedForm1["1010"] = {
      ...updatedForm1["1010"],
      [period]: value("1011") - value("1012"),
    };

    updatedForm1["1095"] = {
      ...updatedForm1["1095"],
      [period]:
        value("1000") +
        value("1005") +
        value("1010") +
        value("1015") +
        value("1020") +
        value("1030") +
        value("1035") +
        value("1040") +
        value("1045") +
        value("1090"),
    };

    updatedForm1["1195"] = {
      ...updatedForm1["1195"],
      [period]:
        value("1100") +
        value("1110") +
        value("1125") +
        value("1130") +
        value("1155") +
        value("1160") +
        value("1165") +
        value("1170") +
        value("1190"),
    };

    updatedForm1["1300"] = {
      ...updatedForm1["1300"],
      [period]: value("1095") + value("1195") + value("1200"),
    };

    updatedForm1["1495"] = {
      ...updatedForm1["1495"],
      [period]:
        value("1400") +
        value("1405") +
        value("1410") +
        value("1415") +
        value("1420") -
        value("1425") -
        value("1430"),
    };

    updatedForm1["1595"] = {
      ...updatedForm1["1595"],
      [period]:
        value("1500") +
        value("1510") +
        value("1515") +
        value("1520") +
        value("1525"),
    };

    updatedForm1["1695"] = {
      ...updatedForm1["1695"],
      [period]:
        value("1600") +
        value("1610") +
        value("1615") +
        value("1620") +
        value("1625") +
        value("1630") +
        value("1660") +
        value("1665") +
        value("1690"),
    };

    updatedForm1["1900"] = {
      ...updatedForm1["1900"],
      [period]: value("1495") + value("1595") + value("1695") + value("1700"),
    };
  });

  return updatedForm1;
};

const calculateForm2 = (form2) => {
  const updatedForm2 = { ...form2 };
  const periods = ["current", "previous"];

  periods.forEach((period) => {
    const value = (code) => Number(updatedForm2[code]?.[period] || 0);

    const grossProfitLoss = value("2000") - value("2050");
    updatedForm2["2090"] = {
      ...updatedForm2["2090"],
      [period]: grossProfitLoss > 0 ? grossProfitLoss : 0,
    };
    updatedForm2["2095"] = {
      ...updatedForm2["2095"],
      [period]: grossProfitLoss < 0 ? Math.abs(grossProfitLoss) : 0,
    };

    const operatingFinancialResult =
      grossProfitLoss +
      value("2120") -
      value("2130") -
      value("2150") -
      value("2180");
    updatedForm2["2190"] = {
      ...updatedForm2["2190"],
      [period]: operatingFinancialResult > 0 ? operatingFinancialResult : 0,
    };
    updatedForm2["2195"] = {
      ...updatedForm2["2195"],
      [period]:
        operatingFinancialResult < 0 ? Math.abs(operatingFinancialResult) : 0,
    };

    const profitBeforeTax =
      operatingFinancialResult +
      value("2200") +
      value("2220") +
      value("2240") -
      value("2250") -
      value("2255") -
      value("2270");
    updatedForm2["2290"] = {
      ...updatedForm2["2290"],
      [period]: profitBeforeTax > 0 ? profitBeforeTax : 0,
    };
    updatedForm2["2295"] = {
      ...updatedForm2["2295"],
      [period]: profitBeforeTax < 0 ? Math.abs(profitBeforeTax) : 0,
    };

    const netFinancialResult = profitBeforeTax - value("2300") + value("2305");
    updatedForm2["2350"] = {
      ...updatedForm2["2350"],
      [period]: netFinancialResult > 0 ? netFinancialResult : 0,
    };
    updatedForm2["2355"] = {
      ...updatedForm2["2355"],
      [period]: netFinancialResult < 0 ? Math.abs(netFinancialResult) : 0,
    };

    const otherIncomeBeforeTax =
      value("2400") +
      value("2405") +
      value("2410") +
      value("2415") +
      value("2445");
    updatedForm2["2450"] = {
      ...updatedForm2["2450"],
      [period]: otherIncomeBeforeTax,
    };

    const otherIncomeAfterTax = otherIncomeBeforeTax - value("2455");
    updatedForm2["2460"] = {
      ...updatedForm2["2460"],
      [period]: otherIncomeAfterTax,
    };

    updatedForm2["2465"] = {
      ...updatedForm2["2465"],
      [period]: netFinancialResult + otherIncomeAfterTax,
    };

    updatedForm2["2550"] = {
      ...updatedForm2["2550"],
      [period]:
        value("2500") +
        value("2505") +
        value("2510") +
        value("2515") +
        value("2520"),
    };
  });

  return updatedForm2;
};

const calculateIndicators = (form1, form2, additionalData, indicators) => {
  const updatedIndicators = { ...indicators };

  const valueFromForm1 = (code) => Number(form1[code]?.["end"] || 0);

  updatedIndicators["K1"] =
    valueFromForm1("1695") === 0
      ? 0
      : (valueFromForm1("1160") + valueFromForm1("1165")) /
        valueFromForm1("1695");

  updatedIndicators["K2"] =
    valueFromForm1("1695") === 0
      ? 0
      : (valueFromForm1("1125") +
          valueFromForm1("1155") +
          valueFromForm1("1160") +
          valueFromForm1("1165")) /
        valueFromForm1("1695");

  updatedIndicators["K3"] =
    valueFromForm1("1695") === 0
      ? 0
      : valueFromForm1("1195") / valueFromForm1("1695");

  updatedIndicators["K4"] =
    valueFromForm1("1495") === 0
      ? 0
      : (valueFromForm1("1525") +
          valueFromForm1("1595") +
          valueFromForm1("1695")) /
        valueFromForm1("1495");

  updatedIndicators["K5"] =
    valueFromForm1("1495") === 0
      ? 0
      : (valueFromForm1("1495") - valueFromForm1("1095")) /
        valueFromForm1("1495");

  const valueFromForm2 = (code) => Number(form2[code]?.["current"] || 0);

  const K6Denominator =
    valueFromForm2("2500") +
    valueFromForm2("2505") +
    valueFromForm2("2510") +
    valueFromForm2("2515") +
    valueFromForm2("2520");

  updatedIndicators["K6"] =
    K6Denominator === 0 ? 0 : valueFromForm2("2350") / K6Denominator;

  const valueFromAdditionalData = (code) => Number(additionalData[code] || 0);
  const v18 = valueFromAdditionalData("V18");
  const v20 = valueFromAdditionalData("V20");
  updatedIndicators["K7"] = v18 > 0 && v18 <= 5 ? v18 : 0;

  updatedIndicators["K8"] =
    v20 === 0 ? 0 : valueFromAdditionalData("V19") / v20;

  updatedIndicators["K9"] = valueFromAdditionalData("V17");

  updatedIndicators["K10"] =
    v20 === 0 ? 0 : valueFromAdditionalData("V21") / v20;

  updatedIndicators["K11"] =
    v20 === 0 ? 0 : valueFromAdditionalData("V22") / v20;

  return updatedIndicators;
};

export const calculate = (data) => {
  const { form1, form2, additionalData, indicators, creditWorthiness } = data;
  const updatedForm1 = calculateForm1(form1);
  const updatedForm2 = calculateForm2(form2);
  const updatedIndicators = calculateIndicators(
    updatedForm1,
    updatedForm2,
    additionalData,
    indicators,
  );
  const updatedCreditWorthiness = calculateCreditWorthiness(
    creditWorthiness,
    updatedIndicators,
  );

  data = {
    ...data,
    form1: updatedForm1,
    form2: updatedForm2,
    indicators: updatedIndicators,
    creditWorthiness: updatedCreditWorthiness,
  };

  return data;
};
