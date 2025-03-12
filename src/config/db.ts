import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'neoexam',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 15,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
});

/**
 * Checks if the database connection is active by using a ping.
 * Logs success or failure messages.
 */
const checkDatabaseConnection = async () => {
    try {
        const connection = await pool.getConnection();
        await connection.ping(); // Ping the database to check connection health
        console.log("✅ Database connected successfully!");
        connection.release(); // Release the connection back to the pool
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    }
}

export { pool, checkDatabaseConnection };