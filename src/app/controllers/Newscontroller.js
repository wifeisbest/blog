

class Newscontroller {
    // [GET] /news.hbs
    index(req, res){
        res.render('news')
    }
    show(req, res){
        res.send('This is my News detail')
    }
}
module.exports = new Newscontroller;
