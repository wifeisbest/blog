const express = require('express');
const path = require('path');
// add handlebars
const exphbs = require('express-handlebars');
const app = express ();
const port = 3000;

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
// set statics file
app.use(express.static(path.join(__dirname,'public')))
// app set views
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'resources\\views'));

//router
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/news',(req,res)=>{
    res.render('news');
})
app.get('/search',(req,res)=>{
    res.render('search');
})







app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})