import mongoose from "mongoose";

const parseNumber = (value) => {
  if (value === "" || value == null) {
    return 0;
  }
  return Number(value);
};

const balancePeriod = {
  start: { type: Number, default: 0, set: parseNumber },
  end: { type: Number, default: 0, set: parseNumber },
};

const reportingPeriod = {
  current: { type: Number, default: 0, set: parseNumber },
  previous: { type: Number, default: 0, set: parseNumber },
};

const financialReportSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    date: { type: String, required: true },

    form1: {
      1000: balancePeriod,
      1001: balancePeriod,
      1002: balancePeriod,
      1005: balancePeriod,
      1010: balancePeriod,
      1011: balancePeriod,
      1012: balancePeriod,
      1015: balancePeriod,
      1020: balancePeriod,
      1030: balancePeriod,
      1035: balancePeriod,
      1040: balancePeriod,
      1045: balancePeriod,
      1090: balancePeriod,
      1095: balancePeriod,
      1100: balancePeriod,
      1110: balancePeriod,
      1125: balancePeriod,
      1130: balancePeriod,
      1135: balancePeriod,
      1136: balancePeriod,
      1155: balancePeriod,
      1160: balancePeriod,
      1165: balancePeriod,
      1170: balancePeriod,
      1190: balancePeriod,
      1195: balancePeriod,
      1200: balancePeriod,
      1300: balancePeriod,
      1400: balancePeriod,
      1405: balancePeriod,
      1410: balancePeriod,
      1415: balancePeriod,
      1420: balancePeriod,
      1425: balancePeriod,
      1430: balancePeriod,
      1495: balancePeriod,
      1500: balancePeriod,
      1510: balancePeriod,
      1515: balancePeriod,
      1520: balancePeriod,
      1525: balancePeriod,
      1595: balancePeriod,
      1600: balancePeriod,
      1610: balancePeriod,
      1615: balancePeriod,
      1620: balancePeriod,
      1621: balancePeriod,
      1625: balancePeriod,
      1630: balancePeriod,
      1660: balancePeriod,
      1665: balancePeriod,
      1690: balancePeriod,
      1695: balancePeriod,
      1700: balancePeriod,
      1900: balancePeriod,
    },

    form2: {
      2000: reportingPeriod,
      2050: reportingPeriod,
      2090: reportingPeriod,
      2095: reportingPeriod,
      2120: reportingPeriod,
      2130: reportingPeriod,
      2150: reportingPeriod,
      2180: reportingPeriod,
      2190: reportingPeriod,
      2195: reportingPeriod,
      2200: reportingPeriod,
      2220: reportingPeriod,
      2240: reportingPeriod,
      2250: reportingPeriod,
      2255: reportingPeriod,
      2270: reportingPeriod,
      2290: reportingPeriod,
      2295: reportingPeriod,
      2300: reportingPeriod,
      2305: reportingPeriod,
      2350: reportingPeriod,
      2355: reportingPeriod,
      2400: reportingPeriod,
      2405: reportingPeriod,
      2410: reportingPeriod,
      2415: reportingPeriod,
      2445: reportingPeriod,
      2450: reportingPeriod,
      2455: reportingPeriod,
      2460: reportingPeriod,
      2465: reportingPeriod,
      2500: reportingPeriod,
      2505: reportingPeriod,
      2510: reportingPeriod,
      2515: reportingPeriod,
      2520: reportingPeriod,
      2550: reportingPeriod,
      2600: reportingPeriod,
      2605: reportingPeriod,
      2610: reportingPeriod,
      2615: reportingPeriod,
      2650: reportingPeriod,
    },

    additionalData: {
      V17: { type: Number, default: 0, set: parseNumber },
      V18: { type: Number, default: 0, set: parseNumber },
      V19: { type: Number, default: 0, set: parseNumber },
      V20: { type: Number, default: 0, set: parseNumber },
      V21: { type: Number, default: 0, set: parseNumber },
      V22: { type: Number, default: 0, set: parseNumber },
    },

    indicators: {
      K1: balancePeriod,
      K2: balancePeriod,
      K3: balancePeriod,
      K4: balancePeriod,
      K5: balancePeriod,
      K6: reportingPeriod,
      K7: { type: Number, default: 0 },
      K8: { type: Number, default: 0 },
      K9: { type: Number, default: 0 },
      K10: { type: Number, default: 0 },
      K11: { type: Number, default: 0 },
    },
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
