import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <h1>Welcome to the Music Shop</h1>
            <p>Discover a wide range of musical instruments and accessories.</p>
            <section className="featured-products">
                <h2>Featured Products</h2>
                {/* Add featured products here */}
            </section>
            <section className="promotions">
                <h2>Current Promotions</h2>
                {/* Add promotional content here */}
            </section>
        </div>
    );
};

export default Home;