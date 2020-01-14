describe('logic - register user', () => {
    let name, surname, email, password

    beforeEach(() => {
        name = `nameasdfg-${Math.random()}`
        surname = `surnamfge-${Math.random()}`
        email = `emaifgl-${Math.random()}@mail.com`
        password = `passwgfdford-${Math.random()}`
    })

    it('should succeed on correct credentials', done => {
        registerUser(name, surname, email, password, (error, response) => {
            expect(error).toBeUndefined()
            expect(response).toBeDefined()

            done()
        })
    })

    describe('when user already exists', () => {
        beforeEach(done => {
            registerUser(name, surname, email, password, (error, response) => {
                expect(error).toBeUndefined()
                expect(response).toBeDefined()

                done()
            })

        })

        it('should fail on already existing user', done => {
            registerUser(name, surname, email, password, (error, response) => {
                expect(response).toBeUndefined()
                expect(error).toBeDefined()

                expect(error.message).toBeDefined()
                expect(typeof error.message).toBe('string')
                expect(error.message.length).toBeGreaterThan(0)

                done()
            })

        })
    })

})