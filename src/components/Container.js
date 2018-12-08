import React from 'react';
import Title from './Title';

const Container = (props) => {
    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-md-5 offset-md-7'}>
                    <div className={'info'}>
                        <Title/>
                        <div className={'fs-16'}>
                            <p>{`City: ${props.data.city}`}</p>
                            <p>{`Country: ${props.data.country}`}</p>
                            <hr/>
                            <p>{`Cloud: ${props.data.cloud}`}</p>
                            <p>{`Wind speed: ${props.data.wind_speed}`}</p>
                            <p>{`Temperature: ${props.data.temperature}`}</p>
                            <p>{`Humidity: ${props.data.humidity}`}</p>
                            <p>{`Pressure: ${props.data.pressure}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Container;