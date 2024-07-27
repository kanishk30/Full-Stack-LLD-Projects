import React, {useState} from 'react'


const TemperatureDisplay = ({temperature}) => {
    
    const fahrenheit = (temperature * 9/5) + 32;

    return <div>
        <p>Temperature in Celsius: {temperature}</p>
        <p>Temperature in Fahrenheit: {fahrenheit}</p>
    </div>
    
}

export default TemperatureDisplay;
