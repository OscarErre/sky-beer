function SearchResults ({searchResults, onClickItem, onClose, logged, onSubmit, onFav, onRate}) {
    return <>
    <i className="close fas fa-times" onClick={e=>{
        e.preventDefault()
        onClose()
    } }></i>

    <div className="search-results">
        <div className="search-results__menu search-menu">
            <div className="search-menu__title search-menu__title--principal">Search </div>
            <div className="search-menu__query">{`${searchResults.length} results found:`}</div>
            <div className="search-menu__line"></div>
            <div>
                <form className="search-menu__form" onSubmit={ event => {
                            event.preventDefault()
                            let { abv , ibu, ebc } = event.target

                            abv = abv.checked ? event.target.abvValue.value : ''
                            ebc = ebc.checked ? `&ebc_gt=${event.target.ebcValue.value}` : ''
                            ibu = ibu.checked ? `&ibu_gt=${event.target.ibuValue.value}` : ''
                            
                            onSubmit(`${abv}${ebc}${ibu}`)
                        }}>
                    <div className="search-menu__form--ABV">
                    <div className="search-menu__title"><input type="checkbox" name="abv" value="abv"></input> Alcohol %</div>
                        <ul className="search-menu__list">
                            <li><input type="radio" name="abvValue" value="&abv_lt=5"></input> &lt; 5% Alcohol</li>
                            <li><input type="radio" name="abvValue" value="&abv_lt=10" checked></input> &lt; 10% Alcohol</li>
                            <li><input type="radio" name="abvValue" value="&abv_gt=10"></input> &gt; 10% Alcohol</li>
                        </ul>
                    <div className="search-menu__line"></div>
                    </div>
                    <div className="search-menu__form--IBU">
                        <div className="search-menu__title"><input type="checkbox" name="ibu" value="ibu"></input> Bitterness <span id="ibu"></span></div>
                            0<input name="ibuValue" type="range" min="0" max="180" step="1" onChange={ e => {
                                    document.getElementById("ibu").innerText=e.target.value
                                }
                            }></input>180
                        <div className="search-menu__line"></div>
                    </div>
                    <div className="search-menu__form--EBC">
                        <div className="search-menu__title"><input type="checkbox" name="ebc" value="ebc"></input> EBC Color <span id="ebc"></span></div>
                            0<input name="ebcValue" type="range" min="0" max="120" step="1" onChange={ e => {
                                    document.getElementById("ebc").innerText=e.target.value
                                }
                            }></input>120
                    </div>
                    <button type="submit" className="search-menu__submit">Search</button>
                </form>
            </div>
        </div>
        <ul className="search-results__list"> 
            { searchResults.length !== 0 && searchResults.map ((item) => 
                <ListItem onClick={onClickItem} key={item.id} item={item} onFav={onFav} onRate={onRate} logged={logged}/>) || <div>Ups!</div>
            }
        </ul>
    </div>
</>
}