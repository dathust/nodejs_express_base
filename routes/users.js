var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController')
const userController = new UserController()
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', async (req, res) => {
  let user = req.body.user
  try {
    let result = await userController.createUser(user)
    return res.send(result)
  } catch (error) {
    return res.sendStatus(500)
  }
})

router.get('/getUserById/:user_id', async (req, res) => {
  console.log('=====>123');

  let userId = req.params.user_id
  try {
    let result = await userController.getUserById(userId)
    return res.send(result)
  } catch (error) {
    console.log(error);

    return res.sendStatus(500)
  }
})

module.exports = router;
