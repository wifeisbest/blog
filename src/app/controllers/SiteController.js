const Hoa = require('../models/Name')

class Sitecontroller {
    index(req, res){
        Hoa.find({}, function(err,duongs){
            if(!err){
                 res.json(duongs);
            }else{
                res.status(400).json({error:'loi'})
            }
        })
    }
    search(req,res){
        res.render('search')
    }
}
module.exports = new Sitecontroller;
