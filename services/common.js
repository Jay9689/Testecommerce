const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGJiM2RkNGE3ZmRkZjk2OTRiZjdjMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2MjM3Mjc3fQ.apC4hKzUrg8BiO_cv5rJxIT9wD7tg4pIS0PMu2sQNr0"
    return token;
};