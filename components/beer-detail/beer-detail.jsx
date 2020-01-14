function BeerDetail  ({beer, onClose, logged, onFav, onRateDetail}) {

    return <section className="main__beer-detail beer-detail">
                                    <i className="close fas fa-times" onClick={e=>{
                                    e.preventDefault()
                                    onClose()
                                } }></i>
                <h2 className="beer-detail__title">{beer.name} {logged &&  (function () {
                                return <div className="fav fav--detail" onClick={ event => {
                                    event.stopPropagation()
                                    event.preventDefault()
                                    onFav(beer)
                                    }}>{beer.fav ? <i className="fas fa-heart fav--isFav"></i> : <i className="far fa-heart"></i>}</div>
                                })()
                            }</h2>
                    <h4>{beer.tagline}</h4>
                <div className="beer-detail__iteminfo iteminfo">
                    <div className="iteminfo__imageContainer">
                        <img className="iteminfo__image" src={beer.image_url}/>
                    </div>
                    <div className="iteminfo__container container"> 
                        <div className="rate">
                            { logged && (function () {
                                
                                    let stars = []
                                    for (let i=0; i<=5; i++) {
                                        
                                                if (i<beer.rating) {
                                                    stars[i]=<i className="fas fa-star rate__star" key={i} onClick={ event => {
                                                        event.stopPropagation()
                                                        event.preventDefault()
                                                        onRateDetail(beer, i+1)
                                                    }}></i>
                                                } else {
                                                    stars[i]=<i className="far fa-star rate__star" key={i} onClick={ event => {
                                                        event.stopPropagation()
                                                        event.preventDefault()
                                                        onRateDetail(beer, i+1)
                                                    }}></i>
                                                }
                                        }
                                        return stars
                                })()
                            }
                        </div>
                        <p className="container__description">{beer.description}</p>
                        <div className="beer-detail__moreinfo moreinfo">
                            <div className="moreinfo__level"><div>BEER ABV</div><div>- {beer.abv}% -</div></div>
                            <div className="moreinfo__level"><div>BEER IBU</div><div>- {beer.ibu} -</div></div>
                            <div className="moreinfo__level"><div>BEER EBC</div><div>- {beer.ebc} -</div></div>
                        </div>
                        <div>Maridage suggestions:</div>
                        <ul className="container__list">
                            <li>{beer.food_pairing[0]}</li>
                            <li>{beer.food_pairing[1]}</li>
                            <li>{beer.food_pairing[2]}</li>
                        </ul>
                    </div>  
                </div>
                <span className="beer-detail__brewers-tips">{beer.brewers_tips}</span>
        </section>


}
