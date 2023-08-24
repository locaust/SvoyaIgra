const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, password, avatar } = req.body;
    const user = await User.create({ name, password, avatar });
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
