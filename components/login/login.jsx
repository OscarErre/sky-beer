function Login ({logged, name, onLogin, onRegister, onLogout, onFavs, error}) {

    return <>
        <section className="login">
                {!logged && <SignIn onSubmit={onLogin} /*error={error}*/ /> || <> <div className="sign-in"><h1 className="login__hello-username">Hello {name}!</h1><br></br><h2 className="login__user-logout"><a href="#" onClick={event=>{
                    event.preventDefault()
                    onLogout()
                }}>Want to LOG OUT?</a></h2><br></br>
                <h2 className="login__user-logout"><a href="#" onClick={event=>{
                    event.preventDefault()
                    onFavs()
                }}>Show favorites</a></h2></div> </>}
                <SignUp onSubmit={onRegister} /*error={error}*/ />
        </section>
    </>
}