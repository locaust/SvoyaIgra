const router = require('express').Router();
const { Questions } = require('../../db/models');

router
  .get('/', async (req, res) => {
    try {
      const questions = await Questions.findAll();
      res.json(questions);
    } catch ({ message }) {
      res.json({ message });
    }
  })
module.exports = router;
