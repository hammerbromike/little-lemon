import React, { useState } from 'react';

const BookingForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comment, setComment] = useState("");

    const handleSumbit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    return (
        <form className="form" onSubmit={handleSumbit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                value={firstName}
                type={"text"}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                value={lastName}
                type={"text"}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
            />
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                value={email}
                type={"email"}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor="date">Select Date</label>
            <input
                id="date"
                value={date}
                type={"date"}
                onChange={(e) => handleChange(e.target.value)}
                required
            />
            <label htmlFor="time">Select Time</label>
            <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option>--:--</option>
                {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input
                id="guests"
                value={guests}
                type={"number"}
                placeholder={0}
                min={1}
                max={10}
                onChange={(e) => {setGuests(e.target.value)}}
                required
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => {setOccasion(e.target.value)}}
                required
            >
                <option value="">---</option>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <label htmlFor="comment">Comments / Special Requests</label>
            <textarea
                key={comment}
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <input
                className="button"
                aria-label="On Click"
                type={"submit"}
                value={"Reserve Table"}
            />
        </form>
    )
}

export default BookingForm;