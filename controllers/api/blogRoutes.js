const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

router.get('/:blogId', async (req, res) => {
  try {

    res.render('blog');

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router