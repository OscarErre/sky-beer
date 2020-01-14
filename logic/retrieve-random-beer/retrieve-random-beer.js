/**
 * Returns a random beer from punk's API
 * @param {function} callback function that handles the response
 */
function retrieveRandomBeer (callback) {
        call ('GET', 'https://api.punkapi.com/v2/beers/random',undefined, undefined, (result) => {
            if (result.error) callback (new Error(result.error))
            else {
                if (result[0].image_url === null) result[0].image_url = './img/noimage.png'
                callback(undefined,result[0])
            }
        })
}