import React from 'react';
import special from '../scripts/special';
import deliveryIcon from '../images/delivery.png';


const Specials = () => {
    return (
        <section id="specials" name="specials">
            <div class="specials-heading">
                <h1>This Week's Specials!</h1>
                <a href="/" class="button">Online Menu</a>
            </div>
            <div class="container">
                {special.map((special) => (
                    <div key={special.id} className="specials-card">
                        <img src={special.photo} alt={special.name} />
                        <div className="description">
                            <div className="name-price">
                                <h3>{special.name}</h3>
                                <span>${special.price}</span>
                            </div>
                            <p>{special.description}</p>
                            <div className="delivery-icon">
                                <h4><a href="/">Order a Delivery</a></h4>
                                <img src={deliveryIcon} alt="Delivery" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials;