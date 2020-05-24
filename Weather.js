import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#00C6FB", "#005BEA", "red"]}
        style={styles.container}>
        
        <View style={styles.upper}>
            <Ionicons name="ios-rainy" size={140} color="white" />
            <Text style={styles.temp}>16˚</Text>
        </View>

        <View style={styles.lower}>
            <Text style={styles.title}>Raining</Text>
            <Text style={styles.subtitle}>For more info look outside</Text>
        </View>

      </LinearGradient>
    );
  }
}

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