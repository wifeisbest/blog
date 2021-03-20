const express = require('express');
const path = require('path');
// add handlebars
const exphbs = require('express-handlebars');
const app = express ();
const port = 3000;
// nap file router 
const route = require('./routers');

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
// set statics file
app.use(express.static(path.join(__dirname,'public')))
// app set views
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources\\views'));


//router
route(app);

app.listen(port, ()=>{
    console.log(` App listening at http://localhost:${port}`)
})