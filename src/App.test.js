import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './components/Main';
import { fetchAPI, submitAPI } from './scripts/bookAPI';

test("select date label is rendered", () => {
  render (
    <BookingForm availableTimes={{ theTime: [], }} dispatch={expect.anything()} />
  );
  const labelElement = screen.getByText("Select Date");
  expect(labelElement).toBeInTheDocument();
})

test("correct expected value for initializeTimes will be returned", () => {
  const today = new Date();
  const initialState = initializeTimes();
  const expectedResult = { times: fetchAPI(today) };
  expect(initialState).toEqual(expectedResult);
})

test("updateTimes returns the same state", () => {
  const state = {
    theTime: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
  };
  const action = { type: 'SOME_ACTION' };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
})

test("submitAPI returns true", () => {
  const formData = {
    firstName: "Bob",
    lastName: "Canada",
    email: "bob@bob.ca",
    date: "2025-09-03",
    time: "21:30",
    guests: "2",
    occasion: "Anniversary",
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
})