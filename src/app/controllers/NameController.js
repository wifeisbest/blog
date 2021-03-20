const Hoa = require('../models/Name');

class NameController {
    show(req,res,next){
        
        Hoa.findOne({slug: req.params.slug})
            .then(duongs =>{
                res.render('names/show',{duongs})
            })
            .catch(next)

    }
    create(req,res,next){
        res.render('names\\create')
    }
        // post
    store(req, res, next){
       const hoa = new Hoa(req.body);
       hoa.save();
        
    }
}

module.exports = new NameController;
