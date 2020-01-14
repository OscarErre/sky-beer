describe ("logic - retrieve beer", () => {

    let id = Math.floor(Math.random()*300)
    let testBeer

    beforeEach ( done => {
        call('GET', `https://api.punkapi.com/v2/beers/${id}`, undefined, undefined, results => {
            if (results.error) done (results.error)
            else testBeer = results[0]; done (undefined, results)
        })
    })


    it('should succed on get a single beer', done => {
        retrieveBeer( id, undefined, (error, beer) => {

            
            expect(beer).toBeDefined()
            expect(error).toBeUndefined()

            expect(beer.id).toEqual(id)
            expect(beer.id).toEqual(testBeer.id)

            expect(beer.name).toEqual(testBeer.name)

            expect(typeof beer.id).toBe('number')
            expect(beer).toBeInstanceOf(Object)
            
            done()
        })
    })

    it ('should throw TypeError when bad parameter', done => {
        expect(function() { retrieveBeer("b"); }).toThrowError(TypeError, 'b is not a number');
        expect(function() { retrieveBeer(true); }).toThrowError(TypeError, 'true is not a number');
        expect(function() { retrieveBeer([]); }).toThrowError(TypeError, ' is not a number');
        expect(function() { retrieveBeer({}); }).toThrowError(TypeError, '[object Object] is not a number');
        expect(function() { retrieveBeer(undefined); }).toThrowError(TypeError, 'undefined is not a number');
        expect(function() { retrieveBeer(null); }).toThrowError(TypeError, 'null is not a number');

        expect(function() { retrieveBeer(id, undefined, 1); }).toThrowError(TypeError, '1 is not a function');
        expect(function() { retrieveBeer(id, undefined, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { retrieveBeer(id, undefined, []); }).toThrowError(TypeError, ' is not a function');
        expect(function() { retrieveBeer(id, undefined, {}); }).toThrowError(TypeError, '[object Object] is not a function');
        expect(function() { retrieveBeer(id, undefined, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { retrieveBeer(id, undefined, null); }).toThrowError(TypeError, 'null is not a function');
        
        done()
    })
    


})