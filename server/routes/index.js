const router = require('express').Router();

const usersApiRouter = require('./api/users.api.routes');
const gamesApiRouter = require('./api/games.api.routes');

router.use('/api/users', usersApiRouter);
router.use('/api/games', gamesApiRouter);

module.exports = router;
