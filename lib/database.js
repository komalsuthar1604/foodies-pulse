import sql from 'better-sqlite3';
import path from 'path';

let db = null;

export function getDatabase() {
    if (!db) {
        // Open the database synchronously
        const dbPath = path.join(process.cwd(), "foodies.db");
        db = new sql(dbPath);
        
        // Initialize tables right away
        initializeTables(); 
    }
    return db;
}

function initializeTables() {
    // better-sqlite3 uses .exec() directly for schema scripts
    db.exec(`
        CREATE TABLE IF NOT EXISTS meals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,   
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            instructions TEXT NOT NULL,
            author TEXT NOT NULL,
            author_email TEXT NOT NULL,
            category TEXT NOT NULL,
            prep_time INTEGER NOT NULL,
            cook_time INTEGER NOT NULL,
            servings INTEGER NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            likes INTEGER DEFAULT 0
        )
    `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `);

    console.log("Database initialized successfully with better-sqlite3");
}