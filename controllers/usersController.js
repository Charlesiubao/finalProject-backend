const models = require('../models')

const usersController = {}

//signup
usersController.create = async (req, res) => {
  try {
      const user = await models.user.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
      })
      res.json({user})
  } catch (error) {
      console.log(error);
      res.status(400).json({error: error.message})
  }
}

//login
usersController.login = async(req, res) => {
  try {
    const user = await models.user.findOne({
      where: { email: req.body.email }
    })

    if (user.password === req.body.password) {
      res.json({ user, message: 'login successful' })
    } else {
      res.status(401).json({ message: 'login failed' })
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })    
  }
}

usersController.getAll = async (req, res) => {
  try {
      const users = await models.user.findAll()
      res.json({ users })
  } catch (error) {
      res.status(400).json({ message: error.message })
  }
}

usersController.deleteUser = async (req, res) => {
  try {
      const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

      const user = await models.user.findOne({
          where:{
              id:decryptedId.userId
          }
      })

      //Get user's comments and delete     
      const comments = await user.getComments()
      for (let i=0; i<comments.length; i++){
          await comments[i].destroy()
      }
      

      await user.destroy()
      res.json({user, comments})
  } catch (error) {
      res.json(error)
  }
}

usersController.verify = async (req, res) => {

  try {
    const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET) 
    const user = await models.user.findOne({
        where: {
            id: decryptedId.userId
        }
    })
    if (user) {
        res.json({user})
    } else {
      res.status(404)
      res.json({ message: 'user not found' })
    }
  } catch (error) {
      res.json({error})
  }
}

module.exports = usersController