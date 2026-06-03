export default function RecentSlot() {
    const recentActivity= [ 'Maria Shared' , 'Carol liked beef' , 'RajCommented'];
    return (
        <div>
            {recentActivity.map((activity, index) => (
                <div key={index} style={{ padding: '0.5rem',fontSize: '0.9rem', color: '#666', borderBottom: index < recentActivity.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                    {activity}
                </div> 
            ))}
        </div>
    );
}