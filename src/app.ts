import express from 'express';
import { pool, checkDatabaseConnection } from './config/db.ts';
import userRoutes from './routes/userRoutes.ts';

const app = express();
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello, Node.js Express.js');
});

// User routes
app.use('/api/users', userRoutes);

// Function to start the server after DB connection check
const startServer = async () => {
    try {
        await checkDatabaseConnection(); // Check DB connection before starting
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server is running on  http://${process.env.HOSTNAME}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('❌ Failed to start server due to database connection error.', error);
        process.exit(1); // Exit process if DB fails
    }
};
// Start the server
startServer();
