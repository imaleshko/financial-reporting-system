const calculateForm1 = (form1) => {
  const updatedForm1 = { ...form1 };
  const periods = ["start", "end"];

  periods.forEach((period) => {
    const val = (code) => Number(updatedForm1[code]?.[period] || 0);

    updatedForm1["1000"] = {
      ...updatedForm1["1000"],
      [period]: val("1001") - val("1002"),
    };
    updatedForm1["1010"] = {
      ...updatedForm1["1010"],
      [period]: val("1011") - val("1012"),
    };

    updatedForm1["1095"] = {
      ...updatedForm1["1095"],
      [period]:
        val("1000") +
        val("1005") +
        val("1010") +
        val("1015") +
        val("1020") +
        val("1030") +
        val("1035") +
        val("1040") +
        val("1045") +
        val("1090"),
    };

    updatedForm1["1195"] = {
      ...updatedForm1["1195"],
      [period]:
        val("1100") +
        val("1110") +
        val("1125") +
        val("1130") +
        val("1155") +
        val("1160") +
        val("1165") +
        val("1170") +
        val("1190"),
    };

    updatedForm1["1300"] = {
      ...updatedForm1["1300"],
      [period]: val("1095") + val("1195") + val("1200"),
    };

    updatedForm1["1495"] = {
      ...updatedForm1["1495"],
      [period]:
        val("1400") +
        val("1405") +
        val("1410") +
        val("1415") +
        val("1420") -
        val("1425") -
        val("1430"),
    };

    updatedForm1["1595"] = {
      ...updatedForm1["1595"],
      [period]:
        val("1500") + val("1510") + val("1515") + val("1520") + val("1525"),
    };

    updatedForm1["1695"] = {
      ...updatedForm1["1695"],
      [period]:
        val("1600") +
        val("1610") +
        val("1615") +
        val("1620") +
        val("1625") +
        val("1630") +
        val("1660") +
        val("1665") +
        val("1690"),
    };

    updatedForm1["1900"] = {
      ...updatedForm1["1900"],
      [period]: val("1495") + val("1595") + val("1695") + val("1700"),
    };
  });

  return updatedForm1;
};

const calculateForm2 = (form2) => {
  const updatedForm2 = { ...form2 };
  const periods = ["current", "previous"];

  periods.forEach((period) => {
    const val = (code) => Number(updatedForm2[code]?.[period] || 0);

    const grossProfitLoss = val("2000") - val("2050");
    updatedForm2["2090"] = {
      ...updatedForm2["2090"],
      [period]: grossProfitLoss > 0 ? grossProfitLoss : 0,
    };
    updatedForm2["2095"] = {
      ...updatedForm2["2095"],
      [period]: grossProfitLoss < 0 ? Math.abs(grossProfitLoss) : 0,
    };

    const operatingFinancialResult =
      grossProfitLoss + val("2120") - val("2130") - val("2150") - val("2180");
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
      val("2200") +
      val("2220") +
      val("2240") -
      val("2250") -
      val("2255") -
      val("2270");
    updatedForm2["2290"] = {
      ...updatedForm2["2290"],
      [period]: profitBeforeTax > 0 ? profitBeforeTax : 0,
    };
    updatedForm2["2295"] = {
      ...updatedForm2["2295"],
      [period]: profitBeforeTax < 0 ? Math.abs(profitBeforeTax) : 0,
    };

    const netFinancialResult = profitBeforeTax - val("2300") + val("2305");
    updatedForm2["2350"] = {
      ...updatedForm2["2350"],
      [period]: netFinancialResult > 0 ? netFinancialResult : 0,
    };
    updatedForm2["2355"] = {
      ...updatedForm2["2355"],
      [period]: netFinancialResult < 0 ? Math.abs(netFinancialResult) : 0,
    };

    const otherIncomeBeforeTax =
      val("2400") + val("2405") + val("2410") + val("2415") + val("2445");
    updatedForm2["2450"] = {
      ...updatedForm2["2450"],
      [period]: otherIncomeBeforeTax,
    };

    const otherIncomeAfterTax = otherIncomeBeforeTax - val("2455");
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
        val("2500") + val("2505") + val("2510") + val("2515") + val("2520"),
    };
  });

  return updatedForm2;
};

const calculateIndicators = (form1, form2, additionalData, indicators) => {
  const updatedIndicators = { ...indicators };
  const periodsForm1 = ["start", "end"];
  const periodsForm2 = ["current", "previous"];

  periodsForm1.forEach((period) => {
    const val = (code) => Number(form1[code]?.[period] || 0);

    updatedIndicators["K1"] = {
      ...updatedIndicators["K1"],
      [period]:
        val("1695") === 0 ? 0 : (val("1160") + val("1165")) / val("1695"),
    };

    updatedIndicators["K2"] = {
      ...updatedIndicators["K2"],
      [period]:
        val("1695") === 0
          ? 0
          : (val("1125") + val("1155") + val("1160") + val("1165")) /
            val("1695"),
    };

    updatedIndicators["K3"] = {
      ...updatedIndicators["K3"],
      [period]: val("1695") === 0 ? 0 : val("1195") / val("1695"),
    };

    updatedIndicators["K4"] = {
      ...updatedIndicators["K4"],
      [period]:
        val("1495") === 0
          ? 0
          : (val("1525") + val("1595") + val("1695")) / val("1495"),
    };

    updatedIndicators["K5"] = {
      ...updatedIndicators["K5"],
      [period]:
        val("1495") === 0 ? 0 : (val("1495") - val("1095")) / val("1495"),
    };
  });

  periodsForm2.forEach((period) => {
    const val = (code) => Number(form2[code]?.[period] || 0);

    const K6Denominator =
      val("2500") + val("2505") + val("2510") + val("2515") + val("2520");
    updatedIndicators["K6"] = {
      ...updatedIndicators["K6"],
      [period]: K6Denominator === 0 ? 0 : val("2350") / K6Denominator,
    };
  });

  const val = (code) => Number(additionalData[code] || 0);
  const v18 = val("V18");
  const v20 = val("V20");
  updatedIndicators["K7"] = v18 > 0 && v18 <= 5 ? v18 : 0;

  updatedIndicators["K8"] = v20 === 0 ? 0 : val("V19") / v20;

  updatedIndicators["K9"] = val("V17");

  updatedIndicators["K10"] = v20 === 0 ? 0 : val("V21") / v20;

  updatedIndicators["K11"] = v20 === 0 ? 0 : val("V22") / v20;

  return updatedIndicators;
};

export const calculate = (data) => {
  const { form1, form2, additionalData, indicators } = data;
  const updatedForm1 = calculateForm1(form1);
  const updatedForm2 = calculateForm2(form2);
  const updatedIndicators = calculateIndicators(
    updatedForm1,
    updatedForm2,
    additionalData,
    indicators,
  );

  data = {
    ...data,
    form1: updatedForm1,
    form2: updatedForm2,
    indicators: updatedIndicators,
  };

  return data;
};
