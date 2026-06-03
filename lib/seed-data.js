import { getDatabase } from "./database";

export async function seedDatabase() {
    const db = await getDatabase();
    
    // Check if data already exists
    const existingMeals = await db.get('SELECT COUNT(*) as count FROM meals');
    
    if (existingMeals.count > 0) {
        console.log('Database already seeded!');
        return;
    }

    // Sample data array
    const sampleMeals = [
        {
            title: 'Pasta Carbonara',
            category: 'Italian',
            description: 'An Italian dish with eggs, cheese, and pork.',
            instructions: 'Cook Pasta al dente. In a bowl, whisk eggs with cheese...',
            image: '/images/pasta.jpg',
            author: 'John Doe',
            authorEmail: 'john@example.com',
            prepTime: '10 mins',
            cookTime: '15 mins',
            servings: 2,
            likes: 0
        },
        {
            title: 'Paneer Butter Masala',
            category: 'Indian',
            description: 'A rich and creamy North Indian dish featuring succulent paneer cubes cooked in a tomato-cashew gravy.',
            instructions: 'Sauté onions, tomatoes, and cashews, then blend into a smooth paste. Simmer this paste with butter, cream, and aromatic spices. Add grilled paneer cubes and garnish with kasuri methi.',
            image: '/images/paneer-butter.jpg',
            author: 'Aarav Mehta',
            authorEmail: 'aarav@example.com',
            prepTime: '15 mins',
            cookTime: '20 mins',
            servings: 3,
            likes: 0
        },
        {
            title: 'Mushroom Risotto',
            category: 'Italian',
            description: 'A creamy, comforting Italian rice dish slowly cooked with savory mushrooms and parmesan cheese.',
            instructions: 'Sauté sliced mushrooms with garlic and thyme. In a separate pan, toast arborio rice, then slowly add warm vegetable broth one ladle at a time while stirring continuously. Stir in the mushrooms, butter, and parmesan at the end.',
            image: '/images/mushroom-risotto.jpg',
            author: 'Elena Rossi',
            authorEmail: 'elena@example.com',
            prepTime: '10 mins',
            cookTime: '30 mins',
            servings: 2,
            likes: 0
        },
        {
            title: 'Vegetable Stir-Fry',
            category: 'Asian',
            description: 'Crisp, colorful garden vegetables tossed in a savory, sweet, and tangy soy-ginger glaze.',
            instructions: 'Whisk together soy sauce, minced ginger, garlic, and a touch of honey. Stir-fry broccoli florets, bell peppers, carrots, and snap peas in a hot wok with sesame oil for 5 minutes. Pour the sauce over and toss until thickened.',
            image: '/images/veg-stirfry.jpg',
            author: 'Lin Wei',
            authorEmail: 'lin@example.com',
            prepTime: '15 mins',
            cookTime: '10 mins',
            servings: 4,
            likes: 0
        },
        

        // Add remaining 4+ items here...
    ];

    // Seed the database
    for (const meal of sampleMeals) {
        await db.run(`
            INSERT INTO meals (
                title, description, instructions, image, 
                author, author_email, category, 
                prep_time, cook_time, servings, likes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
            meal.title, 
            meal.description, 
            meal.instructions, 
            meal.image, 
            meal.author, 
            meal.authorEmail, 
            meal.category, 
            meal.prepTime, 
            meal.cookTime, 
            meal.servings, 
            meal.likes
        ]);
    }
    
    console.log('Database seeded with sample data!');
}