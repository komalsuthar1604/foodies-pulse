export default function PopularSlot(){
    const popularMeals= [
        { name: 'Spaghetti Bolognese', views: 1234 , likes: 567 },
        { name: 'Chicken Tikka Masala', views: 987 , likes: 432 },
        { name: 'Beef Tacos', views: 876 , likes: 321 },
        { name: 'Vegetable Stir Fry', views: 765 , likes: 210 }
    ];
    return (
        <div>
            {popularMeals.map((meal, index) => (
                <div key={index} style={{ padding: '0.5rem',display:'flex' , justifyContent: 'space-between', borderBottom:index < popularMeals.length - 1 ? '1px solid #e2e8f0' : 'none'}}>
                    <h3>{meal.name}</h3>
                    <p style={{ fontSize: '1.25rem', color: '#e53e3e' }}>Views: {meal.views}</p>
                    <p style={{ fontSize: '1.25rem', color: '#e53e3e' }}>Likes: {meal.likes}</p>
                </div>
            ))}
        </div>
    );
}