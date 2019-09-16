import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

import BrazilClock from '../components/BrazilClock';
import SpainClock from '../components/SpainClock';
import PortugalClock from '../components/PortugalClock';

class Hours extends Component {



  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <View style={{flex: 2, backgroundColor: 'powderblue'}}>
            <BrazilClock
               />
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}}>
            <PortugalClock />
          </View>
          <View  style={{flex: 2, backgroundColor: 'steelblue'}}>
            <SpainClock />
          </View>
        </TouchableOpacity>
      </View>

    )
  }
}



const styles = StyleSheet.create({

  container: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
      color: '#FFFFFF'
    },
    button: {
      borderColor: '#eb4034',
      backgroundColor: '#DDDDDD',
      color: '#000000',
      padding: 10
  },
  panels: {

      height: '100%',
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default Hours;
