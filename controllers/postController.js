const models = require('../models')

const postController = {}

postController.create = async (req,res) => {
  try {
      let post = await models.post.create({
          title: req.body.title,
          description: req.body.description
      })
      res.json({
          post
      })
  } catch (error) {
      res.json({error})
  }
}

module.exports = postController