const router = require('express').Router();
const auth = require('../utils/auth');

router.get('/', async (req, res) => {

  
  res.render('homepage');
});

router.get('/dashboard', auth, async (req, res) => {
  try {
    res.render('dashboard');

  } catch(err) {
    res.status.json(err);
  }

});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;