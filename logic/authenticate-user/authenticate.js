/**
 * it calls to user's API and verificate email and password. If credetials are ok, it sends to the 
 * callback function the id and token responsed from the API
 * @param {string} email user email
 * @param {string} password user password
 * @param {function} callback function that handle's the id and token.
 */

function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    call('POST', 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, undefined, result => {
        if (result.error)
            callback(new Error(result.error))
        else {
            const { data: { id, token } } = result

            callback(undefined, { id, token })
        }
    })
}