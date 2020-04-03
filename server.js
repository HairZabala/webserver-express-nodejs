const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middleware - Definiendo una carpeta publica como aranque de mi sistema.
app.use(express.static(__dirname + '/public/'));

hbs.registerPartials(__dirname + '/views/parciales/');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    // let salida = {
    //     nombre: "hair",
    //     edad: 27,
    //     url: req.url
    // }

    // res.send(salida);
    // res.send('Hola mundo');

    res.render('home', {
        nombre: "hair ZABALA"
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));