const models = require('../models')
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const postController = {}

postController.create = async (req,res) => {
  try {
    const fileStr = req.body.data;
    // console.log(req.body.data)
    // console.log(req.body)
    // console.log(req.headers)
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {width: 1280, height: 720, crop: "limit"});

        let post = await models.post.create({
          title: req.body.title,
          description: req.body.description,
          url: uploadResponse.url,
          user_id: parseInt(req.body.userId)


      })
      console.log(post)
      res.json({
        post
    })
      
      
      // await post.save()
      
      
  } catch (error) {
      res.json({error})
  }
}



module.exports = postController