const Hoa = require('../models/Name')


class TravelController  {
    index (req, res){
        res.send('Travel aroud in the world with my  wins')
    }
}

module.exports = new TravelController ;