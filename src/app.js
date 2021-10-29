const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pages'));

const routesIndex = require('./routes/index.routes');
const routesRotadiscos = require('./routes/rotadiscos.routes');

app.use(routesIndex);
app.use(routesRotadiscos);

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

console.log(path.join(__dirname, '../public'));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones');
});