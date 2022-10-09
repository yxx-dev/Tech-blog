const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

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