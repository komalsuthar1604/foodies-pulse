import { getDatabase } from "./database";

// Fetch all meals, ordered by creation date descending
export async function getAllMeals() {
    const db = await getDatabase();
    const meals = await db.all(`
        SELECT * FROM meals 
        ORDER BY created_at DESC
    `);
    return meals;
}

// Fetch a single meal by its ID
export async function getMeal(id) {
    const db = await getDatabase();
    const meal = await db.get(`
        SELECT * FROM meals 
        WHERE id = ?
    `, id);
    return meal;
}

// Fetch meals filtered by category
export async function getMealsByCategory(category) {
    const db = await getDatabase();
    const meals = await db.all(`
        SELECT * FROM meals 
        WHERE category = ? 
        ORDER BY created_at DESC
    `, category);
    return meals;
}