const Hoa = require('../models/Name');

class MeController {
    me(req,res,next){

       

        Hoa.find({})
            .then(duongs => res.json(duongs))
            .catch(next)
    }
}

module.exports = new MeController;
