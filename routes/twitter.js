var passport = require('passport');

module.exports = (app) => {
    app.get('/auth/twitter', passport.authenticate('twitter'));
    
    app.get('/auth/twitter/callback',
        passport.authenticate(
            'twitter', 
            { successRedirect : '/account', failureRedirect: '/' }
        ),
        (req, res) => {
            res.redirect('/account');
        }
    );

    return app;
};