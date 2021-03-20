const Hoa = require('../models/Name');
const { muti } = require('../../until/mongoose')
const { one } = require('../../until/mongoose')
class NameController {
    show(req,res,next){
        
        Hoa.findOne({slug: req.params.slug})
            .then(duongs =>{
                res.render('names/show',{
                    duongs 
                })
            })
            .catch(next)

    }
    create(req,res,next){
        res.render('names\\create')
    }
    // edit follow id
    edit(req,res,next){
       Hoa.findById(req.params.id)
        .then(duongs =>res.render('names/edit',{
            duongs:one(duongs)
        }))
        .catch(next);
    }
    // put name/:id
    update(req , res, next){
       Hoa.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/name'))
        .catch(next);
    }
        // post
    store(req, res, next){
        Hoa.find({})
        .then(duongs =>{
           
             res.render('names/store',{
                 duongs : muti(duongs)
                })})
        .catch(next) 


       const hoa = new Hoa(req.body);
       hoa.save();
        
    }
}

module.exports = new NameController;
