

class Newscontroller {
  
    index(req, res){
         res.json({
             name:"duong"
         })
    }
    show(req, res){
        res.send('This is my News detail')
    }
}
module.exports = new Newscontroller;
