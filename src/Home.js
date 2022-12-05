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
                       <Product id={123465} title="The lean startup" price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/> 
                       <Product id={123456} title="The lean startup loerm ipsum loerm ipsum loerm ipsum " price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/> 
                    </div>

                    <div className='home_row'>
                    <Product id={123478} title="The lean startup The lean startup loerm ipsum loerm ipsum loerm ipsum " price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
                    <Product id={123487} title="The lean startup loerm ipsum loerm ipsum loerm ipsum The lean startup" price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
                    <Product id={123499} title="The lean startup loerm ipsum loerm ipsum loerm ipsum lean startup" price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/> 
                    </div>

                    <div className='home_row'>
                    <Product id={123460} title="This is the best product you can buy now at best price at amazon" price={29.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'/>
                    </div>
            </div>
        </div>
    )
}

export default Home