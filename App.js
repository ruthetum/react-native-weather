import React, {Component} from 'react';
// 컴포넌트를 사용할 때는 import 시켜야함
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: true
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the Weather</Text>
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
  loading: {
    flex:1,
    backgroundColor: '#FDF6AA',
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  loadingText: {
    fontSize:38,
    marginBottom:150
  }
});
