import React from 'react'
import Products from './Products'


export const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white">
                <img src="../store_9.jpg" className="img-fluid opacity-80" alt="back" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 className="card-title display-3 fw-bolder mb-0 responsive-font-example">WELCOME TO K&T Store</h5>
                    
                    <p className="card-text fs-2">CHECK OUT ALL THE ITEMS</p>
                   
                </div>
            </div>
            <Products/>
        </div>


    )
}

export default Home
