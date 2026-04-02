const donors = [
  {
    donorCode: "DG-001",
    displayName: "A.P.",
    segment: "Major Gifts",
    membership: "Lapsed",
    riskScore: 78,
    outstanding: 30000,
    retention: 48,
    targetType: "Recovery",
    targetingScore: 62,
    askAmount: 10000
  },
  {
    donorCode: "DG-002",
    displayName: "J.L.",
    segment: "Major Gifts",
    membership: "Active",
    riskScore: 24,
    outstanding: 12000,
    retention: 91,
    targetType: "Upgrade",
    targetingScore: 91,
    askAmount: 25000
  },
  {
    donorCode: "DG-003",
    displayName: "M.C.",
    segment: "Mid-Level",
    membership: "Active",
    riskScore: 52,
    outstanding: 8500,
    retention: 67,
    targetType: "Stewardship",
    targetingScore: 70,
    askAmount: 5000
  },
  {
    donorCode: "FDN-003",
    displayName: "PFF",
    segment: "Major Gifts",
    membership: "Active",
    riskScore: 20,
    outstanding: 50000,
    retention: 89,
    targetType: "Upgrade",
    targetingScore: 88,
    askAmount: 50000
  }
];

function riskTier(score) {
  if (score <= 30) return "Low";
  if (score <= 60) return "Medium";
  return "High";
}

function currency(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(val);
}
