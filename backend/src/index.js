const express = require('express');
const { response } = require('express');

app = express();

app.get('/projects', (request, response) => {
    return response.json({message: 'Hello World'});
});

app.listen('3333', () => {
    console.log('✈ back-end started!');
});