/**
 * 
 * It catches all the user's information: name, surname, email, password
 * 
 * @param {string} name user name
 * @param {string} surname user surname
 * @param {email} email user email
 * @param {password} password user password
 * @param {function} callback function that handle the call's response 
 */
function registerUser(name, surname, email, password, callback) {
    if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    if (typeof surname !== 'string') throw new TypeError(surname + ' is not a string')
    if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    call('POST', 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, undefined, function (result) {
        result.error ? callback(new Error(result.error)) : callback(undefined,{username: email, password});
    })
}