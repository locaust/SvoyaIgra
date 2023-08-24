const router = require('express').Router();

const usersApiRouter = require('./api/users.api.routes');
const questionsApiRouter = require('./api/questions.api.routes');

router.use('/api/users', usersApiRouter);
router.use('/api/questions', questionsApiRouter);

module.exports = router;
