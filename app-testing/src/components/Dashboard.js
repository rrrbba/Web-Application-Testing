import React from 'react';


const Dashboard = ({strike, ball, foul, hit}) => {


    return(
        <div>

            <button onClick = {ball}>Ball</button>
            <button onClick = {strike}>Strikes</button>
            <button onClick = {foul}>Fouls</button>
            <button onClick = {hit}>Hits</button>
        </div>
    )
}

export default Dashboard