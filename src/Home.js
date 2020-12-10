import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img className="homeImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/Nov/1500x600_Hero-Tall_ft._CB416202688_.jpg" alt=""/>

                <div className="homeRow">
                    <Product
                    id="12345678"
                    title="HP Essentials Polyester Black, Grey Laptop Backpack"
                    price="149"
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/91R%2BxdafWZL._SL1500_.jpg"/>
                    <Product 
                    id="12365934"
                    title="Rol ex Men's Automatic Submarine Daytona Watch"
                    price="999"
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/41uGpsZA8uL.jpg"/>
                    </div>
                <div className="homeRow">
                    <Product
                    id="12345345"
                    title="New Apple iPhone 12 Pro Max (128GB) - Graphite"
                    price="1000"
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg"/> 
                    <Product
                    id="12345564"
                    title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage) - Space Gray"
                    price="2199"
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"/> 
                    <Product
                    id="17685678"
                    title="New Apple iPad Pro (11-inch, Wi-Fi, 1TB) - Space Grey (2nd Generation)"
                    price="1499"
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg"/>                 
                </div>
                <div className="homeRow">
                    <Product 
                    id="12322228"
                    title="Philips IN-MMS6080B/94 2.1 Channel Multimedia Speakers"
                    price="89"
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81yBepVrymL._SL1500_.jpg"/>
                    <Product
                    id="12389568"
                    title="Hacking: 3 Books in 1: The Beginner's Complete Guide to Computer Hacking and Penetration Testing & The Complete Beginner's Guide to Learning Ethical ... Beginner's Guide to Take Control of Paperback – Import, 18 May 2018"
                    price="29"
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51yMXFMoC1L._SX331_BO1,204,203,200_.jpg"/> 
                    <Product
                    id="10957293"
                    title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
                    price="1000"
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"/> 
                </div>
                <div className="homeRow">
                    <Product 
                    id="18936583"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price="2099"
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
