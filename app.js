const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Route to handle the POST request from the frontend
app.post('/create-account', (req, res) => {
    // Assuming you have a database connection and an "accounts" collection to store customer data
    // Save the customer data received from the frontend into the database

    // For demonstration purposes, let's just log the received data and send a response
    console.log('Received customer data:', req.body);
    const response = {
        insertedId: 'some_generated_id' // Replace with the actual inserted ID from the database
    };
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
