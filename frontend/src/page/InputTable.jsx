import "./print.css";
import { useState } from "react";
import GeneralInfo from "../blocks/GeneralInfo/GeneralInfo.jsx";
import Table1 from "../blocks/Table/Table1.jsx";
import Table2 from "../blocks/Table/Table2.jsx";
import Table3 from "../blocks/Table/Table3.jsx";
import tableStructure1 from "../blocks/Table/TableStructures/tableStructure1.js";
import tableStructure2 from "../blocks/Table/TableStructures/tableStructure2.js";
import tableStructure3 from "../blocks/Table/TableStructures/tableStructure3.js";
import SaveButton from "../blocks/SaveButton/SaveButton.jsx";
import usePostReport from "../hooks/usePostReport.js";
import List from "../blocks/List/List.jsx";
import { flushSync } from "react-dom";

const InputTable = () => {
  const initialState = {
    companyName: "",
    date: "",
    intangibleAssets: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    basicMeans: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    investmentProperty: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    longTermFinancialInvestments: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    deferredTaxAssets: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    otherNonCurrentAssets: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    reserves: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    currentFinancialInvestments: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    moneyAndEquivalents: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    otherCurrentAssets: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    registeredCapital: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    additionalCapital: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    reserveCapital: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    deferredTaxLiabilities: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    longTermBankLoans: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    targetFunding: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    shortTermBankLoans: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    currentProvisions: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    deferredIncome: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    otherCurrentLiabilities: {
      startOfPeriod: 0,
      endOfPeriod: 0,
    },
    netIncomeFromProductSales: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    costOfGoodsSold: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    grossProfit: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    grossLoss: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    otherOperatingIncome: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    operatingProfit: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    operatingLoss: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    profitBeforeTax: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    lossBeforeTax: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    netProfit: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    netLoss: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    otherComprehensiveIncomeBeforeTax: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    incomeTaxRelatedToOtherComprehensiveIncome: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    otherComprehensiveIncomeAfterTax: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    averageAnnualNumberOfCommonShares: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    netProfitLossPerCommonShare: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    dividendsPerCommonShare: {
      forTheReportingPeriod: 0,
      fromTheReportingPeriodOfLastYear: 0,
    },
    termOfExistenceOfTheEnterprise: 0,
    gradationOfProfitAndLossAnalysis: 0,
    largestAmountOfCreditReceivedAndReturned: 0,
    amountOfRequestedLoan: 0,
    amountOfOwnFundsInTheInvestment: 0,
    valueOfOwnLiquidAssets: 0,
  };

  const [data, setData] = useState(initialState);

  const { save, isPending } = usePostReport();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [row, key] = name.split(".");

      setData((prevData) => ({
        ...prevData,
        [row]: {
          ...prevData[row],
          [key]: value,
        },
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const onClick = async () => {
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
      <Table1
        data={data}
        handleChange={handleChange}
        tableStructure={tableStructure1}
      />
      <Table2
        data={data}
        handleChange={handleChange}
        tableStructure={tableStructure2}
      />
      <Table3
        data={data}
        handleChange={handleChange}
        tableStructure={tableStructure3}
      />
      <SaveButton onClick={onClick} isPending={isPending} />
      <List handlePrint={handlePrint} />
    </div>
  );
};

export default InputTable;
