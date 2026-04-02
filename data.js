const donorRiskData = [
  {
    donorCode: "DG-001",
    displayName: "A.P.",
    relationshipType: "Individual",
    segment: "Major Gifts",
    membership: "Lapsed",
    riskScore: 78,
    outstanding: 30000,
    retention: 48,
    pastDueDays: 92,
    reviewNote: "Stewardship-first review recommended"
  },
  {
    donorCode: "DG-002",
    displayName: "J.L.",
    relationshipType: "Individual",
    segment: "Major Gifts",
    membership: "Active",
    riskScore: 24,
    outstanding: 12000,
    retention: 91,
    pastDueDays: 0,
    reviewNote: "Upgrade ask appropriate"
  },
  {
    donorCode: "DG-003",
    displayName: "M.C.",
    relationshipType: "Individual",
    segment: "Mid-Level",
    membership: "Active",
    riskScore: 52,
    outstanding: 8500,
    retention: 67,
    pastDueDays: 34,
    reviewNote: "Reminder-based follow-up"
  },
  {
    donorCode: "DG-004",
    displayName: "T.B.",
    relationshipType: "Individual",
    segment: "Membership",
    membership: "Lapsed",
    riskScore: 69,
    outstanding: 2200,
    retention: 40,
    pastDueDays: 61,
    reviewNote: "Renewal before larger ask"
  },
  {
    donorCode: "DG-005",
    displayName: "C.R.",
    relationshipType: "Individual",
    segment: "Annual Fund",
    membership: "Active",
    riskScore: 18,
    outstanding: 900,
    retention: 94,
    pastDueDays: 0,
    reviewNote: "Healthy retention pattern"
  },
  {
    donorCode: "DG-006",
    displayName: "J.N.",
    relationshipType: "Individual",
    segment: "Mid-Level",
    membership: "Active",
    riskScore: 47,
    outstanding: 6100,
    retention: 72,
    pastDueDays: 21,
    reviewNote: "Moderate monitoring"
  },
  {
    donorCode: "DG-007",
    displayName: "R.A.",
    relationshipType: "Individual",
    segment: "Annual Fund",
    membership: "Lapsed",
    riskScore: 72,
    outstanding: 3400,
    retention: 46,
    pastDueDays: 74,
    reviewNote: "Recovery workflow needed"
  },
  {
    donorCode: "DG-008",
    displayName: "C.D.",
    relationshipType: "Individual",
    segment: "Membership",
    membership: "Active",
    riskScore: 29,
    outstanding: 500,
    retention: 88,
    pastDueDays: 0,
    reviewNote: "Recurring membership candidate"
  },
  {
    donorCode: "DG-009",
    displayName: "P.S.",
    relationshipType: "Individual",
    segment: "Major Gifts",
    membership: "Active",
    riskScore: 44,
    outstanding: 18000,
    retention: 75,
    pastDueDays: 15,
    reviewNote: "Maintain cadence"
  },
  {
    donorCode: "DG-010",
    displayName: "D.J.",
    relationshipType: "Individual",
    segment: "Membership",
    membership: "Lapsed",
    riskScore: 58,
    outstanding: 1500,
    retention: 58,
    pastDueDays: 39,
    reviewNote: "Targeted renewal series"
  },
  {
    donorCode: "FDN-003",
    displayName: "PFF",
    relationshipType: "Foundation",
    segment: "Major Gifts",
    membership: "Active",
    riskScore: 20,
    outstanding: 50000,
    retention: 89,
    pastDueDays: 0,
    reviewNote: "Proposal-based follow-up"
  }
];

const targetingData = [
  { donorCode: "DG-001", displayName: "A.P.", segment: "Major Gifts", targetType: "Recovery", targetingScore: 62, askAmount: 10000, actionWindow: "30 days", nextAction: "Schedule stewardship call" },
  { donorCode: "DG-002", displayName: "J.L.", segment: "Major Gifts", targetType: "Upgrade", targetingScore: 91, askAmount: 25000, actionWindow: "30 days", nextAction: "Personal visit" },
  { donorCode: "DG-003", displayName: "M.C.", segment: "Mid-Level", targetType: "Stewardship", targetingScore: 70, askAmount: 5000, actionWindow: "60 days", nextAction: "Proposal follow-up" },
  { donorCode: "DG-004", displayName: "T.B.", segment: "Membership", targetType: "Renewal", targetingScore: 45, askAmount: 250, actionWindow: "30 days", nextAction: "Renewal outreach" },
  { donorCode: "DG-005", displayName: "C.R.", segment: "Annual Fund", targetType: "Upgrade", targetingScore: 88, askAmount: 1500, actionWindow: "60 days", nextAction: "Upgrade annual ask" },
  { donorCode: "DG-006", displayName: "J.N.", segment: "Mid-Level", targetType: "Stewardship", targetingScore: 73, askAmount: 3500, actionWindow: "90 days", nextAction: "Flexible payment plan" },
  { donorCode: "DG-007", displayName: "R.A.", segment: "Annual Fund", targetType: "Recovery", targetingScore: 39, askAmount: 500, actionWindow: "30 days", nextAction: "Stewardship first" },
  { donorCode: "DG-008", displayName: "C.D.", segment: "Membership", targetType: "Renewal", targetingScore: 82, askAmount: 300, actionWindow: "60 days", nextAction: "Recurring membership ask" },
  { donorCode: "DG-009", displayName: "P.S.", segment: "Major Gifts", targetType: "Upgrade", targetingScore: 79, askAmount: 15000, actionWindow: "60 days", nextAction: "Monitor cadence" },
  { donorCode: "DG-010", displayName: "D.J.", segment: "Membership", targetType: "Renewal", targetingScore: 54, askAmount: 200, actionWindow: "90 days", nextAction: "Targeted renewal email" },
  { donorCode: "FDN-003", displayName: "PFF", segment: "Major Gifts", targetType: "Upgrade", targetingScore: 88, askAmount: 50000, actionWindow: "90 days", nextAction: "Prepare funding brief" }
];

const relationshipData = [
  { code: "DG-001", name: "A.P.", type: "Individual", household: "HH-014", foundation: "FDN-003", status: "Current Donor", lastTouch: "45 days ago" },
  { code: "DG-002", name: "J.L.", type: "Individual", household: "HH-021", foundation: "—", status: "Current Donor", lastTouch: "22 days ago" },
  { code: "DG-003", name: "M.C.", type: "Individual", household: "HH-032", foundation: "—", status: "Current Donor", lastTouch: "60 days ago" },
  { code: "DG-004", name: "T.B.", type: "Individual", household: "HH-044", foundation: "—", status: "Lapsed Donor", lastTouch: "130 days ago" },
  { code: "DG-005", name: "C.R.", type: "Individual", household: "HH-011", foundation: "—", status: "Current Donor", lastTouch: "19 days ago" },
  { code: "FDN-003", name: "PFF", type: "Foundation", household: "—", foundation: "Patel Family Foundation", status: "Foundation Partner", lastTouch: "70 days ago" },
  { code: "HH-014", name: "Household 014", type: "Household", household: "HH-014", foundation: "FDN-003", status: "Linked Household", lastTouch: "45 days ago" }
];

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function riskTier(score) {
  if (score <= 30) return "Low";
  if (score <= 60) return "Medium";
  return "High";
}

function priorityBand(score) {
  if (score >= 80) return "A";
  if (score >= 60) return "B";
  return "C";
}

function priorityClass(score) {
  if (score >= 80) return "priority-a";
  if (score >= 60) return "priority-b";
  return "priority-c";
}
