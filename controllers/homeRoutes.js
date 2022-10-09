const router = require('express').Router();
const auth = require('../utils/auth');
const { User, Blog } = require('../models')

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll();
    const blogs = blogData.map((content) => content.get({ plain: true }));
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', auth, async (req, res) => {
  try {
    res.render('dashboard',{
      logged_in: req.session.logged_in
    });

  } catch(err) {
    res.status(404).json(err);
  }

});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;