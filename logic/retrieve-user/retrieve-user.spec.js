describe('logic - retrieve user', () => {
    let name, surname, email, password
    let id, token

    beforeEach(done => {
        name = `nasdame-${Math.random()}`
        surname = `surnasdame-${Math.random()}`
        email = `emaiasdl-${Math.random()}@mail.com`
        password = `pasasdsword-${Math.random()}`

        call('POST', 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, undefined, result => {
            if (result.error)
                done(new Error(result.error))
            else {
                call('POST', 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, undefined, result => {
                if (result.error)
                    done(new Error(result.error))
                    else {
                        id = result.data.id
                        token = result.data.token
                        done(undefined, result.data)
                    }
                })
            }
        })
    })

    it('should succeed on correct credentials', done => {
        retrieveUser(id, token, (error, response) => {
            expect(error).toBeUndefined()

            expect(response).toBeDefined()

            const { name, surname, username } = response.data

            expect(name).toBeDefined()
            expect(typeof name).toBe('string')
            expect(name.length).toBeGreaterThan(0)

            expect(surname).toBeDefined()
            expect(typeof surname).toBe('string')
            expect(surname.length).toBeGreaterThan(0)

            expect(username).toBeDefined()
            expect(typeof username).toBe('string')
            expect(username.length).toBeGreaterThan(0)



            done()
        })
    })
})