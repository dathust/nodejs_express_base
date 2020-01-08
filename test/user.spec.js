const assert = require('assert')
const axios =require('axios')
const endPoint = 'http://localhost:3000/'
const logger = require('../ultis/logger')

/**
 * not complete
 */
describe('Users', () => {
    before((done) => {

        // connect DB

        //turn off write log in file
        logger.transports.forEach((t) => {
            t.silent = true
        });
        done()
    })
    describe('#findUser()', () => {
        /**
         * test find user by id
         */
        it('should return user', async () => {
            const result = await axios.default.get(endPoint + 'users/getUserById/user_id=datpt_9981')
            const user = result.data
            assert.equal(result.status, 200)
        })

        /**
         * get list user by active
         */
        it('should return user', async () => {
            let params = {
                active: true
            }
            const result = await axios.default.get(endPoint + 'users/getListUser', {params})
            const user = result.data
            assert.equal(result.status, 200)
        })
    })

    describe('#postUser()', () => {

        /**
         * creat user
         */
        it('should return user', async () => {
            let body = {
                username: "datpt",
                phone : "012344565784"
            }
            const result = await axios.default.post(endPoint + 'users/create', body)
            const user = result.data
            assert.equal(result.status, 200)
            assert.equal(user.username, body.username)
        })
    })
})