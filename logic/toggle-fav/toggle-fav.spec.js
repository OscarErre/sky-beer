describe ("logic - toggle-fav", () => {

    let id, token, username, password, name, surname, beerId = Math.floor(Math.random()*200)

    beforeEach ( done=> {
       
            username=`user${Math.random()}@mail.com`
            password=`password${Math.random()}`
            name=`name${Math.random()}`
            surname=`surname${Math.random()}`
            
        call("POST", 'https://skylabcoders.herokuapp.com/api/user/', {username, password, name, surname}, undefined, result =>{
            if (result.error) return done (result.error)
            call ('POST', 'https://skylabcoders.herokuapp.com/api/auth/', {username,password}, undefined, result => {
                if (result.error) return done (result.error)
                let {data: user} = result
                id = user.id
                token = user.token

                done()
            })
        })
    })

    it ("should add to favourites when user's had no favorites", done => {
        toggleFavs (id, token, beerId, (error, response) => {
            expect(error).toBeUndefined()
            expect(response).toBeDefined()

            call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, result => {
                expect (result.data).toBeDefined()
                expect (result.error).toBeUndefined()

                let {data: user} = result

                expect (user.favs).toBeInstanceOf(Array)
                expect (user.favs.length).toBe(1)
                expect (user.favs[0]).toEqual(beerId)

                expect (typeof user.favs[0]).toBe('number')
    
                done()
            })
            
        }) 
    })

    describe ('when favs array exists', () =>{
        beforeEach( done => {
            call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + id, {favs : [23]}, token, result => {
                return (result.error) ? done(result.error) : done(result)
            })
        })


        it ('should succed on adding to favourites on a existing favs array', done => {
            toggleFavs (id, token, beerId, (error, response) => {
                expect(error).toBeUndefined()
                expect(response).toBeDefined()
    
                call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, result => {
                    expect (result.data).toBeDefined()
                    expect (result.error).toBeUndefined()
    
                    let {data: user} = result
    
                    expect (user.favs).toBeInstanceOf(Array)
                    expect (user.favs.length).toBeGreaterThan(1)
                    expect (user.favs).toContain(beerId)
    
                    expect (typeof user.favs[user.favs.indexOf(beerId)]).toBe('number')

                    done()
        
                })
                
            })
        })
    })

    describe ('when beer exists on the favs', () =>{
        beforeEach( done => {
            call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + id, {favs : [beerId]}, token, result => {
                return (result.error) ? done(result.error) : done(result)
            })
        })


        it ('should succed on deleting from favourites', done => {
            toggleFavs (id, token, beerId, (error, response) => {
                expect(error).toBeUndefined()
                expect(response).toBeDefined()
    
                call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, result => {
                    expect (result.data).toBeDefined()
                    expect (result.error).toBeUndefined()
    
                    let {data: user} = result
    
                    expect (user.favs).toBeInstanceOf(Array)
                    expect (user.favs).not.toContain(beerId)
                
                    done()
                })
                
            })
        })
    })

})