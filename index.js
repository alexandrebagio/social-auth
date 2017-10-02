var load = require('express-load');
var app = require('./config/express');
var passport = require('./config/passport')();

// var mongo = require('mongodb').MongoClient;

app.use(passport.initialize());
app.use(passport.session());

app.use('/public', require('express').static('public'));

load('routes').into(app);



app.get('/account', (req, res) => {
    res.render('account', {obj: req.user})
});

app.get('/', (req, res) => {
    
    // mongo.connect('mongodb://localhost:27017/teste', function(err, db) {
    //     if (err) {
    //         throw err;
    //     }
    //     db.collection('mammals').find().toArray(function(err, result) {
    //         if (err) {
    //         throw err;
    //         }
    //         console.log(result);
    //     });
    // });

    res.render('index', {obj:{name:'ManoKay'}});
});


app.listen(3000, () => console.log('Server is running'));