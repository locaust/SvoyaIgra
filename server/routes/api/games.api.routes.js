const router = require('express').Router();
const { Game } = require('../../db/models');

router
  .get('/', async (req, res) => {
    try {
      const games = await Game.findAll();
      res.json(games);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .post('/', async (req, res) => {
    try {
      console.log(req.body, '-----------------------------------');
      const { title, img, description } = req.body;
      const newGame = await Game.create({ title, img, description, user_id: 1 });
      res.json(newGame);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .put('/:gameId', async (req, res) => {
    try {
      const { title, img, description } = req.body;
      const game = await Game.findOne({ where: { id: req.params.gameId } });
      game.title = title;
      game.img = img;
      game.description = description;
      await game.save();
      res.json(game);
    } catch ({ message }) {
      res.json({ message });
    }
  })
  .delete('/:gameId', async (req, res) => {
    try {
      const result = await Game.destroy({ where: { id: req.params.gameId } });
      if (result > 0) {
        res.json({ message: 'success' });
        return;
      }
      res.json({ message: 'false' });
    } catch ({ message }) {
      res.json({ message });
    }
  });

module.exports = router;
