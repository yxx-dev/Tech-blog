const router = require('express').Router();
const auth = require('../../utils/auth');
const { User, Blog, Comment } = require('../../models');

router.get('/dashboard', auth, async (req, res) => {
  try {
    const userBlogsData = await Blog.findAll({
      include: { 
        model: User, 
        attributes: { exclude: ['password'] }
      },
      where: { user_id: req.session.user_id}
    })
    const userBlogs = userBlogsData.map((content) => content.get({ plain: true }));
    // res.json(userBlogs);
    res.render('dashboard', {
      userBlogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/:blogId', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.blogId);
    const blogs = blogData.map((content) => content.get({ plain: true }));
    res.render('blog', {
      blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router