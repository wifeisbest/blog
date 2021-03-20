const newsRouter = require('./news');
const siteRouter = require('./site');
const travelRouter = require('./travel');
const namerouter = require('./name');

function route(app){

    app.use('/news', newsRouter);
    app.use('/travel', travelRouter);
    app.use('/name',namerouter);

    app.use('/', siteRouter);
  


}

module.exports = route;
