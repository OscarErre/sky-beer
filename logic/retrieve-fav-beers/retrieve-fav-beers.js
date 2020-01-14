/**
 * Function that returns the beer's info from Punk API if they are marked as fav on User's account
 * @param {string} id user's id
 * @param {string} token user's token
 * @param {function} callback function that handles the response
 */
function retrieveFavBeers(id, token, callback) {
    if (typeof id !== 'string') throw new TypeError(id +  ' is not a string');
    if (typeof token !== 'string') throw new TypeError(token +  ' is not a string');
    if (typeof callback !== 'function') throw new TypeError(callback +  ' is not a function');

    call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, user => {
                if (user.error ) callback(new Error(user.error))
                else {
                    const {favs} = user.data
                    const favBeersResult = []
                    if (favs){
                        favs.forEach (beer => {
                            if (typeof beer === 'number') {
                                call('GET',`https://api.punkapi.com/v2/beers/${beer}`, undefined, undefined, result => {
                                    if (result.error) callback(error = new Error(result.error))
                                    else {
                                        if(result[0].image_url === null) result[0].image_url = './img/noimage.png'
                                        const {rates} = user.data
                                        result[0].fav = true
                                        let rated
                                        if (rates)  rated = rates.find ( elem => result[0].id===elem.id )
                                        else rated = undefined
                    
                                        if (rated !== undefined) result[0].rating = rated.rating
                                        else result[0].rating = 0
                                        
                                        favBeersResult.push(result[0])
                                        callback(undefined,favBeersResult)
                                    }
                                })
                            }
                        })
                    }
                    callback(undefined, favBeersResult)
                }
    })          
}
