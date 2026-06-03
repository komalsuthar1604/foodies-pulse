import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: 'Foodies-share & Discover Amazing Recipes', 
  description : 'Join our community of food lovers and discover incredible recipes from the word  '
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style ={{ backgroundColor: '#2d3748', color: 'white', padding: '1rem 2rem', marginBottom: '2rem' , boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
          <nav style = {{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto',padding: '0 1rem'}}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center',gap: '0.5rem' }}>
               Foodies
            </div>
            <div style={{ display: 'flex', alignItems: 'center' , gap: '2rem'}}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none'}}>Home</Link>
              <Link href="/meals" style={{color: 'white', textDecoration: 'none'}}>Meals</Link>
              <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none'}}>Dashboard</Link>
            </div>
          </nav>
        </header>
        <main style={{backgroundColor: '#f7fafe', minHeight: 'calc(100vh - 140px)'}}>
          {children}
        </main>
        <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '2rem',textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <p style={{ margin: 0 }}>&copy; 2025 Foodies Community. Share the love of Food!</p>
          </div>
        </footer>
      </body>
    </html>
  );
}