const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// POST endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Check if all required fields are present
    if (name && email && message) {
        // Define object to store form data
        const formData = {
            name,
            email,
            message
        };

        // Read existing data from JSON file (if it exists)
        let existingData = [];
        if (fs.existsSync('data.json')) {
            existingData = JSON.parse(fs.readFileSync('data.json'));
        }

        // Add new form data to existing data
        existingData.push(formData);

        // Write updated data back to JSON file
        fs.writeFileSync('data.json', JSON.stringify(existingData, null, 2));

        // Respond with success status and form data
        res.json({
            success: true,
            message: 'Form submitted successfully',
            data: formData
        });
    } else {
        // Respond with error status if required fields are missing
        res.status(400).json({
            success: false,
            message: 'Error: Required fields are missing'
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
