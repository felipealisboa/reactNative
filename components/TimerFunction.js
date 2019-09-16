import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
  import moment from 'moment';

function TimerFunction({ interval , style}) {
  const pad =(n) => n < 10 ? '0' + n : n;
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <View style={styles.timerContainer}>
       <Text style={style}>{pad(duration.minutes())}:</Text>
       <Text style={style}>{pad(duration.seconds())},</Text>
       <Text style={style}>{pad(centiseconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    timerContainer: {
      flexDirection: 'row',
    }
  })

export default TimerFunction;
