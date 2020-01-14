function SignUp({onSubmit}){
    return <section className="sign-up">
                    <h2 className="login__title">Create a new account</h2>
                    <p className="sign-up__text">Register and create an account to manage your favourite beers and keep in contact with your beer-friends!</p>
                    <form className="sign-up__form" onSubmit={event => {
                            event.preventDefault()
                            const { name: { value: name }, 
                                    surname: { value: surname }, 
                                    username: { value: email }, 
                                    password: { value: password } } = event.target
                            onSubmit(name, surname, email, password)
                        }}>
                        <label>Name: <input type="text" className="sign-up__name" name="name"/></label>
                        <label>Surname: <input type="text" className="sign-up__name" name="surname"/></label>
                        <label>Username: <input type="email" className="sign-up__name" name="username" placeholder="Enter your email"/></label>
                        <label>Password: <input type="password" className="sign-up__name" name="password"/></label>
                        <button className="sign-up__button" >Sign Up</button>
                    </form>

                    {/* {error && <Feedback message={error} />} */}
                    
            </section>
}