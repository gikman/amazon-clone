import React, { Component } from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "./Product";

const photos = [
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg'
    },
    {
        name: 'bg1',
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg'
    }
]
class Home extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1,
          className: "slides"
        };

        return (
            <div className="home">
                
                <div className="home__container">
                    <div className="home__image">
                        <Slider {...settings}>
                            {photos.map(photo => {
                                return(
                                    <div className="bgimages">
                                        <img className="bgimage" src={photo.url}/>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
                
                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        image="https://www.zippytom.com/pub/media/catalog/product/cache/94bf093be1747e2eb18d2b072ecf6ca6/0/1/01_1_3.jpg"
                        rating={5}
                    />
                </div>
                
                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="23445930"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={119.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="3254354345"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        )
    }
}

export default Home
