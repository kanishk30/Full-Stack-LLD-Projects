import React, {useState} from 'react'


const TemperatureInput = (props) => {

    const {temperature, handleTemperatureChange} = props;

    

    return (
        <div>
            <label>Enter temperature:</label>
            <input 
                type='text'
                value={temperature}
                onChange={(e) => handleTemperatureChange(e.target.value)}
            />
        </div>
    )
    
}

export default TemperatureInput;
