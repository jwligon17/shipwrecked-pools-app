const sections = [
  'Leads / Customers',
  'Properties / Pets / Access',
  'Pool Profiles / Outlines',
  'Routes / Technicians',
  'Reports / Photos / Chemistry',
  'Requests / Quotes / Repairs / Master Jobs',
  'Commercial Exports',
  'Billing / Payments',
  'Chat / Conversations',
  'Notifications / Audit Logs',
  'Profitability / Admin-Only Analytics',
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '48px 20px 64px' }}>
      <section
        style={{
          background: '#ffffff',
          border: '1px solid #d0deec',
          borderRadius: 16,
          padding: 24,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: 1, color: '#2c628a' }}>
          SHIPWRECKED POOLS ADMIN
        </p>
        <h1 style={{ marginTop: 8, marginBottom: 10, fontSize: 34 }}>Sprint 01 Admin Shell</h1>
        <p style={{ marginTop: 0, marginBottom: 18, color: '#395870' }}>
          Placeholder dashboard only. No production workflows are implemented in this pack.
        </p>
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
