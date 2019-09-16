import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimerFunction from './TimerFunction';

function Lap({ number, interval, fastest, slowest }) {
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest
  ]
  return (
    <View style={styles.lap} >
      <Text style={lapStyle}>Lap {number}</Text>
      <TimerFunction style={[lapStyle, styles.lapTimer]} interval={interval} />
    </View>
  );
}

const styles = StyleSheet.create({
    lapText: {
      color: '#FFFFFF',
      fontSize: 18,
    },
    lapTimer: {
      width: 30,
    },
    fastest: {
      color: '#4BC05F',
    },
    slowest: {
      color: '#CC3531',
    },
    lap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: '#151515',
      borderTopWidth: 1,
      paddingVertical: 10,
    }
  })


export default Lap;
