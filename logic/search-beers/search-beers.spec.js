describe ("logic - search beers", () => {
    let name='coffee'
    it ('should return an array of results searching by name', done => {
        searchBeers (`beer_name=${name}`, undefined, (error, results)=> {
            
            expect (error).toBeUndefined()
            expect (results).toBeDefined()

            expect (results.length).toBeGreaterThan(0)
            expect (results).toBeInstanceOf(Array)
            
            for (let i=0; i<results.length; i++) {
                expect (results[i]).toBeInstanceOf(Object)
                expect (results[i].name.toLowerCase()).toContain(name.replace("_", " "))
            }

            done()
        })
    })

    it("should fail on non-string query or not callback function", done => {
        expect(function() { searchBeers(1); }).toThrowError(TypeError, '1 is not a string');
        expect(function() { searchBeers(true); }).toThrowError(TypeError, 'true is not a string');
        expect(function() { searchBeers([]); }).toThrowError(TypeError, ' is not a string');
        expect(function() { searchBeers({}); }).toThrowError(TypeError, '[object Object] is not a string');
        expect(function() { searchBeers(undefined); }).toThrowError(TypeError, 'undefined is not a string');
        expect(function() { searchBeers(null); }).toThrowError(TypeError, 'null is not a string');

        expect(function() { searchBeers(`beer_name=${name}`,undefined,  1); }).toThrowError(TypeError, '1 is not a function');
        expect(function() { searchBeers(`beer_name=${name}`,undefined,  true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { searchBeers(`beer_name=${name}`,undefined,  []); }).toThrowError(TypeError, ' is not a function');
        expect(function() { searchBeers(`beer_name=${name}`,undefined,  {}); }).toThrowError(TypeError, '[object Object] is not a function');
        expect(function() { searchBeers(`beer_name=${name}`,undefined,  undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { searchBeers(`beer_name=${name}`,undefined,  null); }).toThrowError(TypeError, 'null is not a function');
            done()
    })
})