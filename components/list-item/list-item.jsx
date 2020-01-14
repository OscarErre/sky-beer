function ListItem ({item, onClick, onFav, onRate, logged}) {
    return <li className="search-results__list-item list-item">
                <article className="search-results__inside">
                            {logged &&  (function () {
                                return <div className="fav" onClick={ event => {
                                    event.stopPropagation()
                                    event.preventDefault()
                                    onFav(item.id)
                                    }}>{item.fav ? <i className="fas fa-heart fav--isFav"></i> : <i className="far fa-heart"></i>}</div>
                                })()
                            }

                    <div className="list-item__container" onClick={ event => {
                        event.preventDefault()
                        onClick(item.id)
                    }}>
                                               
                        <h2 className="list-item__title">{item.name}</h2>
                        <img className="list-item__img" src={item.image_url}/>
                        <p className="list-item__text">{item.tagline}</p>
                        <div className="rate">
                            { logged && (function () {
                                
                                    let stars = []
                                    for (let i=0; i<=5; i++) {
                                        
                                                if (i<item.rating) {
                                                    stars[i]=<i className="fas fa-star rate__star" key={i} onClick={ event => {
                                                        event.stopPropagation()
                                                        event.preventDefault()
                                                        onRate(item.id, i+1)
                                                    }}></i>
                                                } else {
                                                    stars[i]=<i className="far fa-star rate__star" key={i} onClick={ event => {
                                                        event.stopPropagation()
                                                        event.preventDefault()
                                                        onRate(item.id, i+1)
                                                    }}></i>
                                                }
                                        }
                                        return stars
                                })()
                            }
                        </div>
                </div>
            </article>
        </li>
}