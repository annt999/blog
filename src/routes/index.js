const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const authRouter = require('./auth');


function route(app) {
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/auth', authRouter);
    app.use('/', siteRouter);
}

module.exports = route;