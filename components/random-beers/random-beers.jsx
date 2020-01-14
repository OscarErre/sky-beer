function RandomBeers ({randomBeers , onClickItem}) {

    return <>
        <section className="welcome__beers beers">
                <article className="beers__random-beer random-beer" key={randomBeers[0].id} onClick={event=> {
                    event.preventDefault()
                    onClickItem(randomBeers[0].id)
                }}>
                    <div className="random-beer__inside">
                        <h2 className="random-beer__title">{randomBeers[0].name}</h2>
                        <img className="random-beer__img" src={randomBeers[0].image_url}/>
                        <p className="random-beer__text">{randomBeers[0].tagline}</p>
                    </div>
                </article>
                <article className="beers__random-beer random-beer" key={randomBeers[1].id} onClick={event=> {
                    event.preventDefault()
                    onClickItem(randomBeers[1].id)
                }}>
                    <div className="random-beer__inside">
                        <h2 className="random-beer__title">{randomBeers[1].name}</h2>
                        <img className="random-beer__img" src={randomBeers[1].image_url}/>
                        <p className="random-beer__text">{randomBeers[1].tagline}</p>
                    </div>
                </article>
                <article className="beers__random-beer" key={randomBeers[2].id} onClick={event=> {
                    event.preventDefault()
                    onClickItem(randomBeers[2].id)
                }}>
                    <div className="random-beer__inside">
                        <h2 className="random-beer__title">{randomBeers[2].name}</h2>
                        <img className="random-beer__img" src={randomBeers[2].image_url}/>
                        <p className="random-beer__text">{randomBeers[2].tagline}</p>
                    </div>
                </article>
                <article className="beers__random-beer" key={randomBeers[3].id} onClick={event=> {
                    event.preventDefault()
                    onClickItem(randomBeers[3].id)
                }}>
                    <div className="random-beer__inside">
                        <h2 className="random-beer__title">{randomBeers[3].name}</h2>
                        <img className="random-beer__img" src={randomBeers[3].image_url}/>
                        <p className="random-beer__text">{randomBeers[3].tagline}</p>
                    </div>
                </article>
            </section>
    </>
}