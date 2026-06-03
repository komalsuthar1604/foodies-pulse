import { open } from "sqlite";
import sqlite3 from "sqlite3"; // 1. Added missing sqlite3 driver import
import path from "path";

let db = null;

export async function getDatabase() {
    if (!db) {
        db = await open({
            filename: path.join(process.cwd(), "foodies.db"),
            driver: sqlite3.Database 
        });
        await initializeTables(); 
    }
    return db;
}

async function initializeTables() {
    
    await db.exec(`
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

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
        )
    `);

    console.log("Database initialized successfully");
}