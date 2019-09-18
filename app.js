const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

//route untuk halaman home
app.get('/',(request, response) => {
    //render file index.hbs
    response.render('index',{
        name : "M Fikri"
      });
});
 
//route untuk halaman about
app.get('/about',(request, response) => {
    response.send('This is about page');
});

//route untuk manampilkan form
app.get('/post',(request, response) => {
    //render file form.hbs
    response.render('form');
});
   
//route untuk submit form
app.post('/post',(request, response) => {
    //render file form.hbs
    response.render('index',{
      //ambil value dari textname
      name : request.body.textname
    });
});

//route untuk halaman home dengan parameter name
app.get('/:name',(request, response) => {
    //render file index.hbs
    response.render('index',{
      name : request.params.name
    });
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
