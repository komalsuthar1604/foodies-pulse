import React from 'react';
import { getAllMeals } from "@/lib/meals";
import { seedDatabase } from "@/lib/seed-data";
import MealCard from "@/components/MealCard";
export default async function MealsPage() {
    await seedDatabase();
    const meals = await getAllMeals();

    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    Delicious Meals ({meals.length})
                </h1>
                <span style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span>Fresh from our Database!</span>
                    <button style={{ color: 'var(--text-secondary)' }}>View All</button>
                </span>
            </div>

            {meals.length === 0 ? (
                <div className="meals" style={{ textAlign: 'center', padding: '3rem' }}>
                    <h3>No meals found</h3>
                    <p>Be the first to share a delicious recipe!</p>
                </div>
            ) : (
                <div className="grid-2">
                    {meals.map((meal) => (
                        <MealCard key={meal.id} meal={meal} />
                    ))}
                </div>
            )}
        </div>
    );
}