const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Endpoint to handle GET requests to /say
app.get('/say', async (req, res) => {
    try {
        const keyword = req.query.keyword || '';

        // Call your AWS Lambda function
        const functionUrl = 'https://h4rzgp36tvyxc2mto6ieew5rqe0smqzu.lambda-url.us-east-2.on.aws/';
        const response = await axios.get(functionUrl, {
            params: { keyword },
        });

        // Return the response from the function
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error calling the function');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Web service running at http://159.223.186.160:${port}`);
});