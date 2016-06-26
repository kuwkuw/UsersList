var express         = require('express');
var Users           = require('../users');
var router          = express.Router();


var usersList = new Users();

/* GET users. */
router.get('/users', function(req, res) {
    res.json(usersList.users);
});
/* GET user. */
router.get('/users/:id', function(req, res) {
    usersList.getUserById(parseInt(req.params.id))
        .then(function(item){
            res.json(item);
        }).catch(function(reason){
            res.status(404).end(reason);
        });
});
/* DELETE user. */
router.delete('/users/:id', function(req, res) {
    usersList.delete(parseInt(req.params.id))
        .then(function(data){
            res.json(data);
        })
        .catch(function(reason){
            res.status(404).end(reason);
        });
});
/* POST user. */
router.post('/users', function(req, res) {
    res.json(usersList.add(req.body.user));
});
/* PUT user. */
router.put('/users', function(req, res) {
    usersList.update(req.body.user)
        .then(function(data){
            res.json(data);
        })
        .catch(function(reason){
            res.status(500).end(reason);
        });
});
/* POST login. */
router.post('/login', function(req, res) {
    var user = usersList.findUserByEmail(req.body.user.email);

    if(user && user.password === req.body.user.password){
        req.session.email = user.email;
        res.json({token: req.session.email});
    }
    else{
        res.end();
    }
});
/* GET log out. */
router.get('/logout', function(req, res){
    req.session.destroy();
    res.end();
});
/* GET auth. */
router.get('/auth', function(req, res) {
    res.json({token: req.session.email});
});
/* POST sign in. */
router.post('/signin', function(req, res) {
    var user = usersList.add(req.body.user);

    req.session.email = user.email;
    res.json({token: user.email});
});

module.exports = router;