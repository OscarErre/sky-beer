function Header ({onBurguer,onBeers,onCommunity,onSubmit,onInvest,onLogin, name, showSearch}) {
    return <>
    <header className="header">
        <img className="header__logo" src="./img/logo.png"/>
        <h1 className="header__title">SkyBeer APP</h1>
        <div className="header__burguer" onClick={event => {
            event.preventDefault()
            onBurguer()}}>
                <i className="fas fa-bars"></i>
        </div>
        <ul className="header__menu menu">
            <li className="menu__beers" onClick={event => {
                event.preventDefault()
                onBeers()}}>BEERS</li>
            <li className="menu__community" onClick={event => {
                event.preventDefault()
                onCommunity()}}>COMMUNITY</li>
            <li className="menu__search">
                <form onSubmit={event => {
                    event.preventDefault()
                    const { query : {value : query} } = event.target
                    onSubmit(`beer_name=${query}`)}}>
                        <input type="search" name="query" placeholder="search" className="query"/>
                        <button className="button"><i className="fas fa-search"></i></button>
                </form>
            </li>
            <li className="menu__invest" onClick={event => {
                event.preventDefault()
                onInvest()}}>INVEST</li>
        </ul>
        <div className="header__login">
            <div className="icon" onClick={event => {
            event.preventDefault()
            onLogin()}}><i className="far fa-user"></i><span className="icon__text">{name || 'LOG IN'}</span></div>
        </div>
    </header>
    <div className="header__back"></div>
    {showSearch && <nav className="header__burguer-search"><form onSubmit={event => {
                    event.preventDefault()
                    const { query : {value : query} } = event.target
                    onSubmit(`beer_name=${query}`)}}>
                        <input type="search" name="query" placeholder="search" className="query"/>
                        <button className="button"><i className="fas fa-search"></i></button>
                </form></nav>}
    </>
}