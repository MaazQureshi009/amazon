import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {   
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt='' />
                    <div className='home_row'>
                       <Product id={123465} title="The Genius of Amazon: How Jeff Bezos and Online Shopping Changed the World (Tech Titans (Alternator Books (R)))" price={873.99} rating={5} image='https://m.media-amazon.com/images/I/6176joFgx7L._AC_UY327_FMwebp_QL65_.jpg'/> 
                       <Product id={123456} title="Prestige IRIS Plus 750 watt mixer grinder" price={3249.99} rating={5} image='https://m.media-amazon.com/images/I/51HfqyUaHyL._AC_UY327_FMwebp_QL65_.jpg'/> 
                    </div>

                    <div className='home_row'>
                    <Product id={123478} title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor, 5 ATM & 7 Days Battery(Charcoal Black)" price={2999.99} rating={5} image='https://m.media-amazon.com/images/I/617ysOitciL._AC_UL480_FMwebp_QL65_.jpg'/>
                    <Product id={123487} title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" price={3499} rating={5} image='https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg'/>
                    <Product id={123499} title="Apple iPhone 12 (128GB) - Blue" price={57900} rating={5} image='https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY327_FMwebp_QL65_.jpg'/> 
                    </div>

                    <div className='home_row'>
                    <Product id={123460} title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels" price={58500} rating={5} image='https://m.media-amazon.com/images/I/71it2biogSS._AC_UY327_FMwebp_QL65_.jpg'/>
                    </div>
            </div>
        </div>
    )
}

export default Home