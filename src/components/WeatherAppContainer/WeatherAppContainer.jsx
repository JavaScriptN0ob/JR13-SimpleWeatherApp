// import axios from 'axios';
import React from 'react';
import WeatherAndTemp from './components/WeatherAndTemp';
import WindSpeed from './components/WindSpeedAndHumidity';

class WeatherAppContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      myName: '维尼',
      weather: null,
      temp: null,
      windSpeed: null,
      humidity: null,
      city: null,
    };
  }

  componentDidMount() {
    fetch('https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=AU&cityName=Sydney&weatherType=current', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((result) => {
        const { current: {weather, maxCelsius, windSpeed, humidity }, city: { name } } = result.response;
        this.setState({
          weather,
          temp: maxCelsius,
          windSpeed,
          humidity,
          city: name,
        })
      })
      .catch((error) => error && alert(error.message));
  }

  // componentDidMount() {
  //   axios
  //    .get('https://weather-server-wenpei.herokuapp.com/cityWeather?countryCode=AU&cityName=Sydney&weatherType=current')
  //     .then((response) => console.log(result))
  //     .catch((error) => console.error(error));
  // }

  render() {
    const { myName, weather, temp, windSpeed, humidity, city } = this.state;
    return (
      <React.Fragment>
        <h1>{`${myName}'s Simple Weather App`}</h1>
        {weather && temp && <WeatherAndTemp weather={weather} temp={temp} />}
        <WindSpeed windSpeed={windSpeed} humidity={humidity} city={city} />
      </React.Fragment>
    )
  }
}

export default WeatherAppContainer;