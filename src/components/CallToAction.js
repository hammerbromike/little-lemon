import React from 'react';
import { Link } from 'react-router-dom';
import heroPhoto from '../images/restaurantfood.jpg';

const CallToAction = () => {
    return (
        <section id="hero" name="hero">
            <div className="container">
                <div className="hero-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" className="button" aria-label="On Click">Reserve a Table</Link>
                </div>
                <div className="hero-right">
                    <img src={heroPhoto} alt="Restaurant Food" />
                </div>
            </div>
        </section>
    )
}

export default CallToAction;