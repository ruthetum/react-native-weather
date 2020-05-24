import React, {Component} from 'react';
// 컴포넌트를 사용할 때는 import 시켜야함
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

const API_KEY = "5c89812bb68998dec0f4af785a3ab100";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature:null,
    name:null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition (
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error:error
        })
      }
    );
  }

  _getWeather = (lat, lng) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
    });
  }

  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection:'row',      // 가로 방향 배치
    // justifyContent:'center',  // 세로 가운데
    // alignItems:'center'       // 가로 가운데
  },
  errorText: {
    color:"red",
    backgroundColor:"transparent",
    alignItems:'center',
    marginBottom: 10
  },
  loading: {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  loadingText: {
    fontSize:38,
    marginBottom:120,
  }
});
