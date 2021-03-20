const Hoa = require('../models/Name');

class MeController {

    me(req,res,next){

       
        Hoa.find({})
            .then(duongs => {
                duongs = duongs.map(duongs => duongs.toObject());
                 res.render('me/stored-me',{duongs})})
            .catch(next)

    }
}

module.exports = new MeController;
