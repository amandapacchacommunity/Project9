:root {
  --bg: #f4f7fb;
  --card: #ffffff;
  --text: #1f2a44;
  --muted: #667085;
  --border: #e4e7ec;
  --shadow: 0 10px 24px rgba(16, 24, 40, 0.08);
  --accent: #175cd3;
  --accent-soft: #eff4ff;
  --success-bg: #ecfdf3;
  --success-text: #027a48;
  --warn-bg: #fffaeb;
  --warn-text: #b54708;
  --danger-bg: #fef3f2;
  --danger-text: #b42318;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 24px;
}

.nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.nav a {
  text-decoration: none;
  color: var(--text);
  background: white;
  border: 1px solid var(--border);
  padding: 10px 14px;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: var(--shadow);
}

.nav a.active {
  background: var(--accent-soft);
  color: var(--accent);
  border-color: #c7d7fe;
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 22px;
}

.hero h1 {
  margin: 0 0 8px;
  font-size: 2rem;
}

.hero p {
  margin: 0;
  max-width: 860px;
  color: var(--muted);
  line-height: 1.55;
}

.pill {
  background: var(--accent-soft);
  color: var(--accent);
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 18px;
  margin-bottom: 18px;
}

.card h2 {
  margin: 0 0 12px;
  font-size: 1.1rem;
}

.sub {
  margin: -2px 0 14px;
  color: var(--muted);
  line-height: 1.5;
  font-size: 0.95rem;
}

.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 18px;
}

.kpi h3 {
  margin: 0;
  font-size: 0.92rem;
  color: var(--muted);
}

.kpi .value {
  font-size: 2rem;
  font-weight: 800;
  margin: 10px 0 6px;
}

.kpi .note {
  color: var(--muted);
  line-height: 1.45;
  font-size: 0.9rem;
}

.two-col {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  margin-bottom: 18px;
}

.three-col {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.callout {
  border-left: 5px solid var(--accent);
  background: #f8faff;
}

.callout strong {
  display: block;
  margin-bottom: 8px;
}

.status {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
}

.low {
  background: var(--success-bg);
  color: var(--success-text);
}

.medium {
  background: var(--warn-bg);
  color: var(--warn-text);
}

.high {
  background: var(--danger-bg);
  color: var(--danger-text);
}

.priority-a {
  background: var(--success-bg);
  color: var(--success-text);
}

.priority-b {
  background: var(--warn-bg);
  color: var(--warn-text);
}

.priority-c {
  background: var(--danger-bg);
  color: var(--danger-text);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

th, td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}

th {
  color: var(--muted);
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

ul.clean {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.55;
}

.small {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 1024px) {
  .two-col,
  .three-col {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 16px;
  }

  .hero h1 {
    font-size: 1.6rem;
  }

  .kpi .value {
    font-size: 1.6rem;
  }
}
