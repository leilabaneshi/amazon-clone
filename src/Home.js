import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/29/digital/video/gateway/placement/launch/boratsubsequentmoviefilm/SENG_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_it-IT._CB417535063_.jpg" alt="amazon" />

            {/*oroduct id, title, price, rating,image */}
            <div className="home__row">
                <Product
                    id={1}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={1}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={1}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />

            </div>
            <div className="home__row">
                <Product
                    id={4}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={5}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={6}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />

            </div>
            <div className="home__row">
                <Product
                    id={7}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={8}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />
                <Product
                    id={9}
                    title='Panasonic LUMIX Professional 8-18mm Camera Lens, G LEICA DG VARIO-ELMARIT, F2.8-4.0 ASPH, Mirrorless Micro Four Thirds, H-E08018 (Black)'
                    price={1000}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61cv58nSL%2BL._AC_UL270_SR270,270_.jpg'
                />

            </div>

        </div>
    )
}

export default Home
