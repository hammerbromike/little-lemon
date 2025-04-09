import React from 'react';
import review from '../scripts/review';

const CustomersSay = () => {
    return (
        <section id="testimonials" name="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {review.map((review) => (
                    <div key={review.id} className="rating-card">
                        <img src={review.photo} alt={review.name} />
                        <div className="name-rating">
                            <h4>{review.name}</h4>
                            <div className="rating">
                                <img src={review.rating1} alt="star" />
                                <img src={review.rating2} alt="star" />
                                <img src={review.rating3} alt="star" />
                                <img src={review.rating4} alt="star" />
                                <img src={review.rating5} alt="star" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CustomersSay;