import React from 'react';
import Dashboard from './Dashboard';

const Display = ({balls, strikes}) => {
  


    return(
        <div>

            <h2>Balls</h2>
            <div>{balls}</div>

            <h2>Strikes</h2>
            <div>{strikes}</div>
        </div>
    )
}

export default Display