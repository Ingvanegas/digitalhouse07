const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => { // localhost:3000
    res.status(200).send('Hola muchaches');
});

app.get('/clase16', (req, res) => { // localhost:3000/index
    res.status(200).sendFile(path.join(__dirname, 'views/clase16.html'));
});

app.get('/login', (req, res) => { // localhost:3000/index
    res.status(200).sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/formulario', (req, res) => { // localhost:3000/index
    res.status(200).sendFile(path.join(__dirname, 'views/formulario.html'));
});

app.get('/index', (req, res) => { // localhost:3000/index
    res.status(200).sendFile(path.join(__dirname, 'views/pagina.html'));
});

app.get('/test', (req, res) => { // localhost:3000/index
    res.status(200).sendFile(path.join(__dirname, 'views/test.html'));
});

app.get('/saludo', (req, res) => { // localhost:3000
    res.status(200).send('<h1>Hola mundo</h1>');
});

app.get('/saludohtml', (req, res) => { // localhost:3000
    res.status(200).sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/image', (req, res) => { // localhost:3000
    res.status(200).sendFile(path.join(__dirname, 'images/image.html'));
});

app.get('/document', (req, res) => { // localhost:3000
    res.status(200).sendFile(path.join(__dirname, 'documents/documento.csv'));
});

app.get('/estudiantes', (req, res) => { // localhost:3000/estudiantes
    res.status(200).send([
        'Silvana',
        'Andrea',
        'Jose',
        'Walter'
    ]);r
});

app.post('/prueba', (req, res)  => {
    res.status(200).send(req.body);
})

app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000');
});