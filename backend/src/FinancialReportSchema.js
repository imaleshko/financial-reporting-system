import mongoose from "mongoose";

const balancePeriod = {
  startOfPeriod: { type: Number, default: 0 },
  endOfPeriod: { type: Number, default: 0 },
};

const reportingPeriod = {
  forTheReportingPeriod: { type: Number, default: 0 },
  fromTheReportingPeriodOfLastYear: { type: Number, default: 0 },
};

const financialReportSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    date: { type: String, required: true },

    intangibleAssets: balancePeriod,
    basicMeans: balancePeriod,
    investmentProperty: balancePeriod,
    longTermFinancialInvestments: balancePeriod,
    deferredTaxAssets: balancePeriod,
    otherNonCurrentAssets: balancePeriod,
    reserves: balancePeriod,
    currentFinancialInvestments: balancePeriod,
    moneyAndEquivalents: balancePeriod,
    otherCurrentAssets: balancePeriod,
    registeredCapital: balancePeriod,
    additionalCapital: balancePeriod,
    reserveCapital: balancePeriod,
    deferredTaxLiabilities: balancePeriod,
    longTermBankLoans: balancePeriod,
    targetFunding: balancePeriod,
    shortTermBankLoans: balancePeriod,
    currentProvisions: balancePeriod,
    deferredIncome: balancePeriod,
    otherCurrentLiabilities: balancePeriod,

    netIncomeFromProductSales: reportingPeriod,
    costOfGoodsSold: reportingPeriod,
    grossProfit: reportingPeriod,
    grossLoss: reportingPeriod,
    otherOperatingIncome: reportingPeriod,
    operatingProfit: reportingPeriod,
    operatingLoss: reportingPeriod,
    profitBeforeTax: reportingPeriod,
    lossBeforeTax: reportingPeriod,
    netProfit: reportingPeriod,
    netLoss: reportingPeriod,
    otherComprehensiveIncomeBeforeTax: reportingPeriod,
    incomeTaxRelatedToOtherComprehensiveIncome: reportingPeriod,
    otherComprehensiveIncomeAfterTax: reportingPeriod,
    averageAnnualNumberOfCommonShares: reportingPeriod,
    netProfitLossPerCommonShare: reportingPeriod,
    dividendsPerCommonShare: reportingPeriod,

    termOfExistenceOfTheEnterprise: { type: Number, default: 0 },
    gradationOfProfitAndLossAnalysis: { type: Number, default: 0 },
    largestAmountOfCreditReceivedAndReturned: { type: Number, default: 0 },
    amountOfRequestedLoan: { type: Number, default: 0 },
    amountOfOwnFundsInTheInvestment: { type: Number, default: 0 },
    valueOfOwnLiquidAssets: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

const FinancialReport = mongoose.model(
  "FinancialReport",
  financialReportSchema,
);

export default FinancialReport;
