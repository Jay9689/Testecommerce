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
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDM0NTMwY2U3OWU5YWJhMDMzMjg2MSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1Njg0NjU2fQ.1C3KqpgBM5rcCQfrYbDnMihU5oFr-2Res_lB74jFfLs"
    return token;
};