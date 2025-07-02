const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// Route to handle the POST request from the frontend
app.post('/create-account', (req, res) => {
    console.log('Received customer data:', req.body);
    const response = {
        insertedId: 'some_generated_id' 
    };
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
