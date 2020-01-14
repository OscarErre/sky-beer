/**
 * Function that adds or removes a beer from user's favs array
 * @param {string} userId user's id
 * @param {string} token user's token
 * @param {number} beerId beer's id
 * @param {function} callback function that handles call response
 */
function toggleFavs (userId, token, beerId, callback) {

    if (typeof userId !== 'string') throw new TypeError (`${userId} is not a string`)
    if (typeof token !== 'string') throw new TypeError (`${token} is not a string`)
    if (typeof beerId !== 'number') throw new TypeError (`${beerId} is not a number`)
    if (typeof callback !== 'function') throw new TypeError (`${callback} is not a function`)


    call ('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, undefined, token, result => {
        if (result.error) return callback(result.error)
        let favs = result.data.favs

        if (favs) {
            let index = favs.indexOf(beerId)
            index < 0 ? favs.push(beerId) : favs.splice(index, 1)
        } else {favs = []; favs.push(beerId)}

        call ('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, {'favs' : favs}, token, result => {
            result.error ? callback (result.error) : callback (undefined, result)
        })
    })
}