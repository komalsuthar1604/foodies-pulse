export default function MarketingLayout({ children }){
    return (
        <div>
            <div style={{ backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem', textAlign: 'center' ,marginRight: '1rem' }}>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                    Join our Community of 10,000+ food Lovers!  
                </p>
            </div>
            {children}
        </div>
    )
}