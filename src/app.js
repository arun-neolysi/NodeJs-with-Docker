const express = require('express');

// Routes
const userRoutes = require('../src/routes/userRoutes.js');

const app = express();
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Hello, Node.js Express.js');
});

// User routes
app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.HOSTNAME}:${process.env.PORT}`);
});