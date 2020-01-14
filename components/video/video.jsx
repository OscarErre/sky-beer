function Video () {
    return <section className="main__video video">
                <video className="video__background" autoPlay muted loop>
                    <source src="./vid/video.mp4" type="video/mp4"/>
                </video>
                <div className="video__title">ENJOY THE BEER</div>
                <div className="video__description">To beer or not to beer, easy question..</div>
        </section>
}    