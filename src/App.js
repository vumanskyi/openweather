import React from 'react';
import Config from './Config';
import Container from './components/Container';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            city: 'Lviv',
            country: 'UA',
            cloud: 0,
            wind_speed: 0,
            temperature: 0,
            humidity: 0,
            pressure: 0
        }
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Config.city},${Config.country}&appid=${Config.api_key}&units=metric`)
            .then(result => {
                return result.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    cloud: data.clouds.all,
                    wind_speed: data.wind.speed,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure
                });
            });
    }

    render(){
        return (
            <section className={`container_bg container_bg__${Math.floor(Math.random() * (Config.max - Config.min + 1)) + Config.min}`}>
                <Container data={this.state}/>
            </section>
        );
    }
}

export default App;