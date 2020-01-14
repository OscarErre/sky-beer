describe('logic - retrieve-random-beer', () => {
    let randomBeer, randomBeer2
    beforeEach (done => {
        call ('GET', 'https://api.punkapi.com/v2/beers/random',undefined, undefined, (result) => {
            result.error ? done(new Error(result.error)) : randomBeer=result[0]; done(undefined,result[0])
        })
        call ('GET', 'https://api.punkapi.com/v2/beers/random',undefined, undefined, (result) => {
            result.error ? done(new Error(result.error)) : randomBeer2=result[0]; done(undefined,result[0])
        })
        
    })
    
    it ('should succed on get a random beer', done =>{
        
        retrieveRandomBeer ((error,beer) => {

            expect(error).toBeUndefined()
            expect(beer).toBeDefined()

            expect(beer.id).toBeDefined()
            expect(typeof beer.id).toBe('number');

            expect(beer.name).toBeDefined();
            expect(typeof beer.name).toBe('string');
            expect(beer.name.length).toBeGreaterThan(0);

            expect(beer.image_url).toBeDefined();
            expect(typeof beer.image_url).toBe('string');
            expect(beer.image_url.length).toBeGreaterThan(0);

            expect(beer.tagline).toBeDefined();
            expect(typeof beer.tagline).toBe('string');
            expect(beer.tagline.length).toBeGreaterThan(0);

            done()
        })
    })

    it ('should succed on get diferent random beers', done => {

        retrieveRandomBeer ((error,beer) => {

            expect(beer.id).not.toEqual(randomBeer.id)
            expect(beer.id).not.toEqual(randomBeer2.id)
            expect(randomBeer.id).not.toEqual(randomBeer2.id)
        
            done()
        })

    })
})