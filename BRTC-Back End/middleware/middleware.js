const axios = require('axios')

class middleware {
    bkash_auth = async (req, res, next) => {

        // Clear the global variable from previous requests
        delete global.id_token  // Use global and delete the token from the global scope

        try {
            const { data } = await axios.post(process.env.bkash_grant_token_url, {
                app_key: process.env.bkash_api_key,
                app_secret: process.env.bkash_secret_key,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    username: process.env.bkash_username,
                    password: process.env.bkash_password,
                }
            })

            // Store the token in the global object
            global.id_token = data.id_token
            console.log(data)

            next()
        } catch (error) {
            return res.status(401).json({ error: error.message })
        }
    }
}

module.exports = new middleware()


