import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = (props) => {
    return (
        <section id="booking" name="booking">
            <div className="container">
                <h1>Reserve a Table</h1>
                <BookingForm
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    submitForm={props.submitForm}
                />
            </div>
        </section>
    )
}

export default BookingPage;