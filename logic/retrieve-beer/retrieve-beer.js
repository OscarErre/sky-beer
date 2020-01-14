/**
 * Function that gets the info from Punk Api using the beer's id as identificator.
 * 
 * @param {number} beerId beer's id
 * @param {object} credentials Optional - {id and token} the id and token of user. It's need to
*                              let user rate and fav a beer
 * @param {function} callback function that handle the call's repsonse.
 */
function retrieveBeer (beerId, credentials, callback)  {

    if (typeof beerId !== 'number') throw new TypeError (`${beerId} is not a number`)
    if (typeof callback !== 'function') throw new TypeError (`${callback} is not a function`)

    call('GET', `https://api.punkapi.com/v2/beers/${beerId}`, undefined, undefined, result => {
        if (result.error) callback (result.error)
        else {  
            const {id, token} = credentials
            if (id !== undefined && token !== undefined) {
                call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, user => {
                    if (user.error ) callback(new Error(user.error))
                    else {
                        const {favs, rates} = user.data 

                        if (result[0].image_url === null) result[0].image_url = './img/noimage.png'
                                                                
                        favs.includes(result[0].id) ? result[0].fav = true : result[0].fav = false
                        let rated
                        if (rates)  rated = rates.find ( elem => result[0].id===elem.id )
                        else rated = undefined

                        if (rated !== undefined) result[0].rating = rated.rating
                        else result[0].rating = 0

                        callback (undefined, result[0])
                        
                    }
                })
            } else { if (result[0].image_url === null) result[0].image_url = './img/noimage.png'
                     callback(undefined,result[0])
            }
        }
    })
}   