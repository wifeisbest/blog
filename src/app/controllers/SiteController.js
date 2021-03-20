

class Sitecontroller {
    // [GET] /news.hbs
    home(req, res){
        res.render('home')
    }
    search(req, res){
        res.render('search')
    }
}
module.exports = new Sitecontroller;
