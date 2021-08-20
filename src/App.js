import React from "react";
import "./App.css";
import Weather from "./Components/weatherComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./Components/formComponent";
import Footer from "./Components/footer";

const API_KEY = "de16cc0d74480dea2b232e06e31e400f";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      max_temp: undefined,
      min_temp: undefined,
      desc: "",
      error: false,
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog",
    };
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  get_WeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ weatherIcon: this.weatherIcon.Thunderstorm });
        break;
      case rangeID >= 300 && rangeID <= 322:
        this.setState({ weatherIcon: this.weatherIcon.Drizzle });
        break;
      case rangeID >= 500 && rangeID <= 533:
        this.setState({ weatherIcon: this.weatherIcon.Rain });
        break;
      case rangeID >= 600 && rangeID <= 623:
        this.setState({ weatherIcon: this.weatherIcon.Snow });
        break;
      case rangeID >= 700 && rangeID <= 782:
        this.setState({ weatherIcon: this.weatherIcon.Atmosphere });
        break;
      case rangeID === 800:
        this.setState({ weatherIcon: this.weatherIcon.Clear });
        break;
      case rangeID >= 801 && rangeID <= 805:
        this.setState({ weatherIcon: this.weatherIcon.Clouds });
        break;
      default:
        this.setState({ weatherIcon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const response = await api_call.json();
      console.log(response);

      this.setState({
        city: `${response.name},${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        min_temp: this.calCelsius(response.main.temp_min),
        max_temp: this.calCelsius(response.main.temp_max),
        desc: response.weather[0].description,
        error: false,
      });
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          celsius={this.state.celsius}
          min_temp={this.state.min_temp}
          max_temp={this.state.max_temp}
          desc={this.state.desc}
          weatherIcon={this.state.weatherIcon}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
