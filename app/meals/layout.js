import Link from "next/link";
export default function MealLayout({ children }) {
    return (
        <div >
            <div style={{ backgroundColor:'#fffbf0' , padding :'1rem' , borderRadius:'8px' , marginTop : "2rem" , border: '2px solid #ffd700'}}>
                <h1 style={{color : '#d69e2c', margin: 0}}>Meals Section!</h1>
                <p style={{margin :'0.5rem' , color : '#744210'}}> Discover amazing recipes</p>
            </div>
            <nav style = {{ marginBottom : '2rem'}}>
                <Link href="/meals" style={{ marginRight: '1rem' , padding: '0.5rem 1rem', backgroundColor: '#e98836', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>All Meals</Link>
                <Link href="/meals/share" style={{ marginRight: '1rem' , padding: '0.5rem 1rem', backgroundColor: '#e98836', color: 'white', textDecoration: 'none', borderRadius: '4px'}}>Share Your Recipe</Link>
            </nav>
            {children}
        </div>

    );
}