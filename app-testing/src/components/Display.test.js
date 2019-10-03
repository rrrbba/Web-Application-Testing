import React from 'react'
import { render } from '@testing-library/react';
import Display from './Display';


test('renders without crashing', () => {
    render(<Display />)
});

test('Balls are found', () => {
    const { getByText } = render(<Display />);
    
    getByText(/balls/i)
})

test('Strikes are found', () => {
    const { getByText } = render(<Display />);

    getByText(/strikes/i);
})