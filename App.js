import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Stopwatch from './screens/Stopwatch';
// import Timer from './screens/Timer';
import Hours from './screens/Hours';
//import Timer from './screens/Timer';
import Timer from './screens/TCountDown';

class App extends Component {
  render() {
    return (
      <View style={styles.stopwatchScreen}>
          <Stopwatch />
      </View>
    );
  }
}

const TabNavigator =
  createBottomTabNavigator(
    {
      Stopwatch: { screen: Stopwatch },
      Timer: { screen: Timer },
      Hours: { screen: Hours }
    },
    {
      tabBarOptions: {
      fontWeight: 'bold',
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      },
    }
  );


const styles = StyleSheet.create({
  stopwatchScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default createAppContainer(TabNavigator);
