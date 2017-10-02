var passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    
    app.get('/auth/google/callback',
        passport.authenticate(
            'google', 
            { successRedirect : '/account', failureRedirect: '/' }
        ),
        (req, res) => {
            res.redirect('/account');
        }
    );

    return app;
};