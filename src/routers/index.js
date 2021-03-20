const newsRouter = require('./news');
const siteRouter = require('./site')
const travelRouter = require('./travel')

function route(app){

    app.use('/news', newsRouter)
    app.use('/travel', travelRouter);


    app.use('/', siteRouter);
  


}

module.exports = route;
