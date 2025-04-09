import React from 'react';

const BookingConfirmed = () => {
    return (
        <section id="confirmed" name="confirmed">
            <div className="container">
                <h1>Booking Confirmed</h1>
                <div class="form">
                    <p>Your table reservation has been booked successfully!</p>
                    <a className="button" href="/" aria-label="On Click">Back to Little Lemon</a>
                </div>
            </div>
        </section>
    )
}

export default BookingConfirmed;