function Welcome ({randomBeers, onClickItem}) {

    return <>
        <section className="main__welcome welcome">
            <RandomBeers randomBeers={randomBeers} onClickItem={onClickItem}/>
            <Ranking />
        </section>
    </>
}