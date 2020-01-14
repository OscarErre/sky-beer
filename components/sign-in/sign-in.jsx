function SignIn ({onSubmit, /*error*/}){ 

    return <section className="sign-in">
                <h2 className="login__title">Sign In</h2>
                <form className="sign-in__form" onSubmit={event => {
                    event.preventDefault()

                    const { username : {value : username}, 
                            password : {value : password} } = event.target

                    onSubmit(username, password)             
                    }}>
                    <label>Username: <input type="email" className="sign-in__name" name="username" placeholder="Enter your email"/></label>
                    <label>Password: <input type="password" className="sign-in__name" name="password"/></label>
                    <a href="#" className="link">Forgot your password?</a>
                    <button className="sign-in__button">Sign In</button>
                </form>

                 {/* {error && <Feedback message={error} />} */}
        </section>

}