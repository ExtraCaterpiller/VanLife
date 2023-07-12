import image from '../image/about.png'

function About(){
    return(
        <div className='about'>
            <img className='about--image' src={image} alt="description" />
            <h1 className='about--title1'>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p className='about--text1'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch&nbsp;costs&nbsp;extra&nbsp;😉)</p>

            <p className='about--text2'>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className='about--box'>
                <h2 className='about--title2'>Your destination is waiting.
                    Your van is ready.</h2>
                <button className='about--button'>Explore our vans</button>
            </div>
        </div>
    )
}

export default About