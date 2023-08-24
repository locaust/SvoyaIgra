const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
