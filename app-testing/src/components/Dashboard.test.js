import React from 'react'
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';


test('renders without crashing', () => {
    render(<Dashboard />)
});

test('Fouls are found', () => {
    const { getByText } = render(<Dashboard />);
    
    getByText(/fouls/i)
})

test('Hits are found', () => {
    const { getByText } = render(<Dashboard />);

    getByText(/hits/i);
})