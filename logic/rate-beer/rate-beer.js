/**
 * this function saves on user's account a pair of information on a ratings array
 * it saves the beer's id with it's valoration.
 * if there were a previous valoration, it rewrite the value.
 * 
 * @param {string} userId user's id at user's API
 * @param {string} token user's token at user's API
 * @param {number} beerId beer's id at punk API
 * @param {number} rating valoration of beer to save on user's account
 * @param {function} callback function that handles the call's response
 */
function rateBeer (userId, token, beerId, rating, callback) {

    if (typeof userId !== 'string') throw new TypeError (`${userId} is not a string`)
    if (typeof token !== 'string') throw new TypeError (`${token} is not a string`)
    if (typeof beerId !== 'number') throw new TypeError (`${beerId} is not a number`)
    if (typeof rating !== 'number') throw new TypeError (`${rating} is not a number`)
    if (typeof callback !== 'function') throw new TypeError (`${callback} is not a function`)


    call ('GET', 'https://skylabcoders.herokuapp.com/api/user/' + userId, undefined, token, result => {
        if (result.error) return callback(result.error)
        let rates = result.data.rates

        if (rates) {

            let found = rates.find( elem => {
                return elem.id === beerId
            })

            if (found) found.rating = rating
            else rates.push({'id': beerId, 'rating': rating})

        } else {rates = []; rates.push({'id': beerId, 'rating': rating})}

        call ('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, {'rates' : rates}, token, result => {
            result.error ? callback (result.error) : callback (undefined, result)
        })
    })
}