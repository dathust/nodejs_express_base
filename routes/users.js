var express = require('express');
const logger = require('../ultis/logger')
var router = express.Router();
const UserController = require('../controllers/userController')
const userController = new UserController()
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', async (req, res) => {
  let username = req.body.username
  let phone = req.body.phone
  try {
    logger.info(`create user ${username}`)    
    let user = {
      username: username,
      phone: phone
    }    
    let result = await userController.createUser(user)
    return res.send(user)
  } catch (error) {
    logger.error('log error in here')
    return res.sendStatus(500)
  }
})

router.get('/getUserById/:user_id', async (req, res) => {
  let userId = req.params.user_id
  try {
    let result = await userController.getUserById(userId)
    logger.info(`log info in here: ${userId}`)
    return res.send(result || 'ok')
  } catch (error) {
    logger.error('log error in here')
    return res.sendStatus(500)
  }
})

router.get('/getListUser', async (req, res) => {  
  let userId = req.query.user_id
  try {
    console.log('=======>userId: ', userId)
    logger.info(`log info in here: ${userId}`)
    return res.send(userId || 'ok')
  } catch (error) {
    logger.error('log error in here')
    return res.sendStatus(500)
  }
})

module.exports = router;
