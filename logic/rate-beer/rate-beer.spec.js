describe ('logic - rate-beer', () => {

    let id, token, username, password, name, surname, beerId = Math.floor(Math.random()*200), rating=Math.floor(Math.random()*5)

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

    it ("should add a beer rating on user's account when it's his first rating", done => {
        rateBeer (id, token, beerId, rating, (error, response) => {
            expect(error).toBeUndefined()
            expect(response).toBeDefined()

            call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, undefined, token, result => {
                expect (result.data).toBeDefined()
                expect (result.error).toBeUndefined()

                let {data: user} = result

                expect (user.rates).toBeInstanceOf(Array)
                expect (user.rates.length).toBe(1)
                expect (user.rates[0].id).toEqual(beerId)
                expect (user.rates[0].rating).toEqual(rating)

                expect (user.rates[0]).toBeInstanceOf(Object)
    
                done()
            })
        }) 
    })

})