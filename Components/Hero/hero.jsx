import './hero.css'
function Hero(){
    return(
        <div className="body">
            <section className='hero'>
                <div className="content">
                    <div className="para">
                    <h1 id='first'>Let us find your</h1>
                    <h1 id='second'>Forever Food</h1>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis perferendis cum maiores hdhd horen ystre</p>
                    <div className="btn-container">
                        <button id='search__btn'>Search Now</button>
                        <button id='know__btn'>Know More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;