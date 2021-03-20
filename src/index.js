const express = require('express');
const path = require('path');
// add handlebars
const exphbs = require('express-handlebars');
const app = express ();
const methodOverride = require('method-override')
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// nap file router 
const route = require('./routers');

const db = require('./config/db');
db.connect();

app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
// set statics file
app.use(express.static(path.join(__dirname,'public')))
app.use(methodOverride('_method'));
// app set views
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources\\views'));


//router
route(app);

app.listen(port, ()=>{
    console.log(` App listening at http://localhost:${port}`)
})