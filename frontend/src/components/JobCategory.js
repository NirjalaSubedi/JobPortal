const JobCategory = () => {
  const cats=['IT & Software','HealthCare','Banking','Design','marketing'];
  return(
    <div style={{ padding: '50px 5%', textAlign: 'center', backgroundColor: '#f8fafc' }}>
      <h2 style={{ color: '#2d3e50', marginBottom: '30px' }}>Explore by Category</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {cats.map(cat => (
          <div key={cat} style={cardStyle}>{cat}</div>
        ))}
      </div>
    </div>
  )

};
const cardStyle = {
  padding: '20px 40px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  transition: '0.3s',
  fontWeight: '600',
  color: '#3b82f6'
};

export default JobCategory;