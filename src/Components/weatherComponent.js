import React from 'react';


const Weather = (props) => {
    return (
        <div className = 'container'>
            <div className = 'cards pt-4'>
                <h1>{props.city}</h1>    
                <h5 className = 'py-4'>
                    <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                    {props.celsius ? (<h1 className='py-2'>{props.celsius}&deg;</h1>) : null}
                {minmaxTemp(props.min_temp,props.max_temp)}
                <h4 className = 'py-3'>{props.desc}</h4>

            </div>
        </div>
    );
} 

function minmaxTemp(min,max) {
    
    if (min && max) {
        return (
            <h3>
                <span className = 'px-4'>{min}&deg;</span>
                <span className = 'px-4'>{max}&deg;</span>
            </h3>
        );
    }    
}


export default Weather;
