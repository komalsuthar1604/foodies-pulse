export default function DashboardLayout({ children, analytics, recent, popular }) {
    return (
        <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '2rem 1.5rem',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#1e293b'
        }}>
            {/* Header */}
            <h1 style={{ 
                fontSize: '2.25rem', 
                fontWeight: '700', 
                textAlign: 'center', 
                marginBottom: '2.5rem', 
                color: '#0f172a',
                letterSpacing: '-0.025em'
            }}>
                Foodies Dashboard
            </h1>
            
            {/* Main Grid Grid */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(12, 1fr)', 
                gap: '2rem' 
            }}>
                {/* Analytics Widget - Spans 8 columns */}
                <div style={{ 
                    gridColumn: 'span 8',
                    backgroundColor: '#ffffff', 
                    padding: '2rem', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                    border: '1px solid #f1f5f9'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>
                        Analytics Overview
                    </h2>
                    {analytics}
                </div>

                {/* Recent Activity Widget - Spans 4 columns */}
                <div style={{ 
                    gridColumn: 'span 4',
                    backgroundColor: '#ffffff', 
                    padding: '2rem', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                    border: '1px solid #f1f5f9'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>
                        Recent Activity
                    </h2>
                    {recent}
                </div>

                {/* Popular Recipes Widget - Spans full width (all 12 columns) underneath */}
                <div style={{ 
                    gridColumn: 'span 12',
                    backgroundColor: '#ffffff', 
                    padding: '2rem', 
                    borderRadius: '16px', 
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                    border: '1px solid #f1f5f9'
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>
                        Popular Recipes
                    </h2>
                    {popular}
                </div>
            </div>

            {/* In case you need to render page children below */}
            {children && <div style={{ marginTop: '2rem' }}>{children}</div>}
        </div>
    );
}