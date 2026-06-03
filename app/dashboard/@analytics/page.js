export default function AnalyticsSlot(){
    return (
        <div>
            <div style={{ display: 'flex',justifyContent: 'center', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' ,color :'#3182ce'}}>1,234</div>
                    <div style={{ fontSize: '1.25rem',color :'#666'}}>Total views</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' ,color :'#3182ce'}}>89</div>
                    <div style={{ fontSize: '1.25rem',color :'#666'}}>Recipe Shares</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' ,color :'#3182ce'}}>456</div>
                    <div style={{ fontSize: '1.25rem',color :'#666'}}>Community Members</div>
                </div>
            </div>
        </div>
    )
}