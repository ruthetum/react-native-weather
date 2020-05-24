import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
//import { Ionicons } from '@expo/vector-icons';
import { MaterialComunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases = {
  Rain : {
    colors:["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside",
    // icon:"ios-rainy"
    icon:"weather-rainy"
  },
  Clear : {
    colors:["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Go get outside",
    // icon:"ios-sunny"
    icon:"weather-sunny"
  },
  Thunderstorm : {
    colors:["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house",
    // icon:"ios-thunderstorm"
    icon:"weather-lightning"
  },
  Clouds : {
    colors:["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "It is boring",
    // icon:"ios-clouds"
    icon:"weather-cloudy"
  },
  Snow : {
    colors:["#7DE2FC", "#89B6E5"],
    title: "Snowing",
    subtitle: "Do you want to build a snowman?",
    // icon:"ios-snow"
    icon:"weather-snowy"
  },
  Drizzle : {
    colors:["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Do you like rain?",
    // icon:"ios-rainy-outline"
    icon:"weather-hail"
  },
  Haze : {
    colors:["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Heurim Heurim",
    // icon:"ios-rainy-outline"
    icon:"weather-windy"
  },
  Mist : {
    colors:["#00ECBC", "#007ADF"],
    title: "Mist",
    subtitle: "Mistic",
    // icon:"ios-rainy-outline"
    icon:"weather-fog"
  },
}


function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient
        colors={weatherCases[weatherName].colors}
        style={styles.container}>
        
        <View style={styles.upper}>
            {/* <Ionicons  */}
            <MaterialComunityIcons
              name={weatherCases[weatherName].icon}
              size={140}
              color="white" />
            <Text style={styles.temp}>{temp}˚</Text>
        </View>

        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>

      </LinearGradient>
  )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    marginTop:30
  },
  temp:{
    fontSize:48,
    backgroundColor: "transparent",  // 배경 투명하게
    color:"white"
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  title:{
    fontSize:38,
    backgroundColor: "transparent",  // 배경 투명하게
    color:"white",
    marginBottom:10,
    fontWeight:"300"
  },
  subtitle:{
    fontSize:24,
    backgroundColor: "transparent",  // 배경 투명하게
    color:"white",
    marginBottom:30
  }
});