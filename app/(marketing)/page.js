import Link from 'next/link';
export default function Home() {
  return (
    <div style = {{ textAlign: 'center', padding: '2rem' }}>
      <h1  style={{fontSize :'3rem' , marginBottom : '1rem'}}>Welcome to Foodies</h1> 
      <p style={{fontSize :'1.2rem' , marginBottom : '1rem'}}>Discover a recipe</p> 
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link href = "/meals" style={{padding :'1rem 2rem ' , backgroundColor : '#ed8936' , color:'white' , textDecoration: 'none' , borderRadius: '8px' , fontWeight: 'bold'}}>Browse Meals</Link>
        <Link href = "/about" style={{padding :'1rem 2rem ' , backgroundColor : '#ed8936' , color:'white' , textDecoration: 'none' , borderRadius: '8px' , fontWeight: 'bold'}}>Learn More</Link>
        
      </div>
    </div>
  );
} 