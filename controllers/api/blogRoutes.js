const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

router.get('/', async (req, res) => {
    res.render('login');
  });

module.exports = router