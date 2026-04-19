const WEIGHTS = [9, 8, 10, 7, 6, 8, 5, 7, 8, 6, 10];

const uK1 = (K1) => {
  if (K1 <= 0.2) return 0;
  if (K1 <= 0.225) return 32 * (5 * K1 - 1) ** 2;
  if (K1 < 0.25) return 1 - 50 * (1 - 4 * K1) ** 2;
  return 1;
};

const uK2 = (K2) => {
  if (K2 <= 0.5) return 0;
  if (K2 <= 0.75) return 2 * (2 * K2 - 1) ** 2;
  if (K2 < 1) return 1 - 8 * (1 - K2) ** 2;
  return 1;
};

const uK3 = (K3) => {
  if (K3 <= 1) return 0;
  if (K3 <= 1.75) return (4 * (K3 - 1)) / 3;
  if (K3 < 2.5) return (10 - 4 * K3) / 3;
  return 0;
};

const uK4 = (K4) => {
  if (K4 <= 0) return 0;
  if (K4 <= 1) return K4;
  if (K4 < 2) return 2 - K4;
  return 0;
};

const uK5 = (K5) => {
  if (K5 <= 0) return 0;
  if (K5 <= 0.5) return 2 * K5;
  if (K5 < 1) return 2 - 2 * K5;
  return 0;
};

const uK6 = (K6) => {
  if (K6 <= 0.05) return 0;
  if (K6 <= 0.075) return 2 * (20 * K6 - 1) ** 2;
  if (K6 < 0.1) return 1 - 8 * (1 - 10 * K6) ** 2;
  return 1;
};

const uK7 = (K7) => {
  if (K7 <= 1) return 0;
  if (K7 <= 3) return (K7 - 1) ** 2 / 8;
  if (K7 < 5) return 1 - (5 - K7) ** 2 / 8;
  return 1;
};

const uK8 = (K8) => {
  if (K8 <= 0.8) return 0;
  if (K8 <= 0.9) return 2 * (5 * K8 - 4) ** 2;
  if (K8 < 1) return 1 - 2 * (5 - 5 * K8) ** 2;
  return 1;
};

const uK9 = (K9) => {
  if (K9 <= 1) return 0;
  if (K9 <= 3) return (K9 - 1) ** 2 / 8;
  if (K9 < 5) return 1 - (5 - K9) ** 2 / 8;
  return 1;
};

const uK10 = (K10) => {
  if (K10 <= 0.2) return 0;
  if (K10 <= 0.4) return 5 * K10 - 1;
  return 1;
};

const uK11 = (K11) => {
  if (K11 <= 0.25) return 0;
  if (K11 <= 0.625) return (2 * (4 * K11 - 1) ** 2) / 9;
  if (K11 < 1) return 1 - (32 * (1 - K11) ** 2) / 9;
  return 1;
};

const calculateCreditWorthiness = (creditWorthiness, indicators) => {
  const updatedCreditworthiness = {
    ...creditWorthiness,
    uK1: uK1(indicators["K1"]),
    uK2: uK2(indicators["K2"]),
    uK3: uK3(indicators["K3"]),
    uK4: uK4(indicators["K4"]),
    uK5: uK5(indicators["K5"]),
    uK6: uK6(indicators["K6"]),
    uK7: uK7(indicators["K7"]),
    uK8: uK8(indicators["K8"]),
    uK9: uK9(indicators["K9"]),
    uK10: uK10(indicators["K10"]),
    uK11: uK11(indicators["K11"]),
  };

  const totalWeight = WEIGHTS.reduce((sum, weight) => sum + weight, 0);
  const normalizedWeights = WEIGHTS.map((weight) => weight / totalWeight);

  const uKs = [
    updatedCreditworthiness.uK1,
    updatedCreditworthiness.uK2,
    updatedCreditworthiness.uK3,
    updatedCreditworthiness.uK4,
    updatedCreditworthiness.uK5,
    updatedCreditworthiness.uK6,
    updatedCreditworthiness.uK7,
    updatedCreditworthiness.uK8,
    updatedCreditworthiness.uK9,
    updatedCreditworthiness.uK10,
    updatedCreditworthiness.uK11,
  ];

  const finalScore = uKs.reduce(
    (sum, uK, index) => sum + uK * normalizedWeights[index],
    0,
  );

  return {
    ...updatedCreditworthiness,
    finalScore: Number(finalScore.toFixed(3)),
  };
};

export default calculateCreditWorthiness;
