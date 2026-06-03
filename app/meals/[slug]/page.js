import { getMeal } from "@/lib/meals"; // Uses your existing database fetch function
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MealDetailPage({ params }) {
    // 1. Await params if using newer Next.js versions, and access the ID or slug
    const { slug } = await params;
    
    // 2. Fetch data from database
    const meal = await getMeal(slug);
    
    // 3. Fallback if recipe doesn't exist
    if (!meal) {
        notFound();
    }

    return (
        <div style={{ 
            padding: '2rem 1.5rem', 
            maxWidth: '1100px', 
            margin: '0 auto', 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#333'
        }}>
            {/* Back Navigation */}
            <nav style={{ marginBottom: '2rem' }}>
                <Link href="/meals" style={{ 
                    color: '#0070f3', 
                    textDecoration: 'none', 
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    ← Back to Meals
                </Link>
            </nav>

            {/* Header Layout: Text Left, Image Right */}
            <header style={{ 
                display: 'flex', 
                gap: '3rem', 
                flexWrap: 'wrap',
                marginBottom: '3rem',
                alignItems: 'center'
            }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <span style={{ 
                        textTransform: 'uppercase', 
                        fontSize: '0.85rem', 
                        fontWeight: '700', 
                        letterSpacing: '1px', 
                        color: '#666',
                        background: '#eef2f7',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '20px'
                    }}>
                        {meal.category}
                    </span>
                    <h1 style={{ fontSize: '3rem', margin: '1rem 0 0.5rem 0', fontWeight: '800', color: '#111' }}>
                        {meal.title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', fontStyle: 'italic', margin: 0 }}>
                        Recipe curated by {meal.author}
                    </p>
                </div>
                
                {/* Visual Image container */}
                <div style={{ 
                    flex: '1', 
                    minWidth: '300px', 
                    height: '350px', 
                    borderRadius: '16px', 
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                    <img 
                        src={meal.image} 
                        alt={meal.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </header>

            <hr style={{ border: 'none', borderTop: '1px solid #e1e8ed', marginBottom: '3rem' }} />

            {/* Main Page Layout split into Details & Sidebar */}
            <div style={{ 
                display: 'flex', 
                gap: '4rem', 
                flexWrap: 'wrap-reverse' 
            }}>
                {/* Left Side: Description and Prep Steps */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                    <section style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#111' }}>Description</h2> 
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.7', color: '#444' }}>{meal.description}</p>
                    </section>
                    
                    <section> 
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#111' }}>Instructions</h2>
                        <p style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.8', 
                            color: '#444', 
                            whiteSpace: 'pre-wrap',
                            background: '#fafbfc',
                            padding: '2rem',
                            borderRadius: '12px',
                            borderLeft: '4px solid #0070f3'
                        }}>
                            {meal.instructions}
                        </p> 
                    </section>
                </div>

                {/* Right Side: Informational Infobox cards */}
                <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    {/* Quick Info Block */}
                    <div style={{ 
                        background: '#f8fafc', 
                        padding: '1.5rem', 
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0'
                    }}>
                        <h2 style={{ fontSize: '1.3rem', marginTop: 0, marginBottom: '1.25rem', color: '#0f172a' }}>Quick Info</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                <span style={{ color: '#64748b' }}>Prep Time</span>
                                <span><strong>{meal.prep_time}</strong></span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                <span style={{ color: '#64748b' }}>Cook Time</span>
                                <span><strong>{meal.cook_time}</strong></span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                                <span style={{ color: '#64748b' }}>Servings</span>
                                <span><strong>{meal.servings}</strong></span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.25rem' }}>
                                <span style={{ color: '#64748b' }}>Community Likes</span>
                                <span style={{ color: '#e11d48' }}>❤️ <strong>{meal.likes}</strong></span>
                            </div>
                        </div>
                    </div>

                    {/* Creator Info Block */}
                    <div style={{ 
                        background: '#f0fdf4', 
                        padding: '1.5rem', 
                        borderRadius: '12px',
                        border: '1px solid #dcfce7'
                    }}>
                        <h3 style={{ fontSize: '1.15rem', marginTop: 0, marginBottom: '0.75rem', color: '#14532d' }}>Chef Profile</h3>
                        <div style={{ fontWeight: '600', color: '#166534', marginBottom: '0.25rem' }}>{meal.author}</div>
                        <a href={`mailto:${meal.authoremail}`} style={{ 
                            color: '#15803d', 
                            fontSize: '0.95rem',
                            wordBreak: 'break-all'
                        }}>
                            {meal.authoremail}
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}