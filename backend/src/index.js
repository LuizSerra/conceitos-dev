const express = require('express');
const { response } = require('express');

app = express();

app.use(express.json());

app.get('/projects', (request, response) => {

    const {title, owner}  = request.query;
    
    console.log(title);
    console.log(owner);

    return response.json(
        [  'Projeto 1',
           'Projeto 2',
           'Projeto 3',
           'Projeto 4']
    );
});

app.post('/projects', (request, response) => {

    const body = request.body;

    console.log(body);
    
    return response.json(
        {  'nome'  : 'Site Casas Bahia',
           'tipo'  : 'E-commerce',
           'custo' : '50000'
        }
    );
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    console.log(id);
    return response.json(
        {  'nome'  : 'Site Casas Bahia',
           'tipo'  : 'Portal',
           'custo' : '20000'
        }
    );
});

app.delete('/projects/:id', (request, response) => {
    return response.json(
        {  'nome'  : 'Site Casas Bahia',
           'tipo'  : 'E-commerce',
           'custo' : '50000'
        }
    );
});


app.listen('3333', () => {
    console.log('✈ back-end started!');
});