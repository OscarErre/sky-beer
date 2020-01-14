function Speech ({title, text}) {

    return  <section className="main__speech speech">
                <div className="speech__bg"></div>
                <div className="speech__title">{title}</div>
                <div className="speech__description">{text}</div>
            </section>
}