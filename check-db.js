import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const checkCols = async () => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || "localhost",
            user: process.env.DB_USER || "root",
            password: process.env.DB_PASS || "123456",
            database: process.env.DB_NAME || "relief_db"
        });
        const [rows] = await connection.query("SHOW COLUMNS FROM Records");
        console.log("Columns in Records table:");
        rows.forEach(col => console.log(col.Field));
        await connection.end();
    } catch (err) {
        console.error("Error checking columns:", err.message);
    }
};

checkCols();
