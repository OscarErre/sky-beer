function Feedback({ message, onClose }) {
    return <section className="feedback">
        <div className="feedback__back"></div>
        <div className="feedback__container">
        <i className="close fas fa-times" onClick={e=>{
                                    e.preventDefault()
                                    onClose()
                                } }></i>
            <div className="feedback__image"><img src='./img/error.gif' /></div>
            <span className="feedback__icon"></span>
        <p className="feedback__message">{message}</p>
        </div>
    </section>
}