// Handle request and respone.
// Route <-> Controller <-> Service

const UserService = require('../services/userService')
const userService = new UserService()

class UserController {
    constructor() {
        // TODO
    }

    createUser(user) {
        // validate user
        //TODO
        try {
            let createUserResult = userService.createUser(user)
            // return
        } catch (error) {
            //log
            // return
        }
    }

    getUserById(userId) {
        // validate user
        try {
            return userId
        } catch (error) {
            // log
            //handle error
        }
        //TODO
    }
}

module.exports = UserController
