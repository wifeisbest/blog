const Hoa = require('../models/Name')

class Sitecontroller {
    index(req, res, next){
      
        Hoa.find({})
        .then(duongs =>{
            duongs = duongs.map(duongs => duongs.toObject());
             res.render('home',{duongs})})
        .catch(next)   
    }
    search(req,res){
        res.render('search')
    }
}
module.exports = new Sitecontroller;
