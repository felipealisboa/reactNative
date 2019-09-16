import React, { Component, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import TimerFunction from '../components/TimerFunction';
import RoundButton from '../components/RoundButton';
import LapsTable from '../components/LapsTable';
import Lap from '../components/Lap';
import ButtonsRow from '../components/ButtonsRow';


class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      laps: [],
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now,
      laps: [0],
    });
    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      })
    }, 100 );
  }

  lap = () => {
    const timestamp = new Date().getTime();
    const { laps, now, start } = this.state;
    const [firstLap, ...other] = laps;
    this.setState({
      laps: [0, firstLap + now - start, ...other],
      start: timestamp,
      now: timestamp
    });
  }

  stop = () => {
    clearInterval(this.timer);
    const { laps, now, start } = this.state;
    const [ firstLap, ...other] = laps;
    this.setState({
      laps: [firstLap + now - start, ...other],
      start: 0,
      now: 0
    });
  }

  reset = () => {
    this.setState({
      laps: [],
      start: 0,
      now: 0,
    });
  }

  resume = () => {
    const now = new Date().getTime()
    this.setState({
      start: now,
      now,
    })
    this.timer = setInterval(() => {
      this.setState({ now: new Date().getTime()})
    }, 100);
  }

  render() {
    const {now, start, laps } = this.state;
    const timer = now - start;

    return (
      <View style={styles.container} >
          <TimerFunction
              interval = {laps.reduce((total, curr) => total + curr, 0) + timer}
              style = {styles.timer}
           />
           {laps.length === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#8B8B90'
              background='#bab7a9'
              disabled
            />
            <RoundButton
              title='Start'
              color='#50D167'
              background='#2b9e3e'
              onPress={this.start}
            />
          </ButtonsRow>
        )}
        {start > 0 && (
          <ButtonsRow>
            <RoundButton
              title='Lap'
              color='#FFFFFF'
              background='#f5f4f0'
              onPress={this.lap}
            />
            <RoundButton
              title='Stop'
              color='#E33935'
              background='#9e2b31'
              onPress={this.stop}
            />
          </ButtonsRow>
        )}
        {laps.length > 0 && start === 0 && (
          <ButtonsRow>
            <RoundButton
              title='Reset'
              color='#FFFFFF'
              background='#9e2b31'
              onPress={this.reset}
            />
            <RoundButton
              title='Start'
              color='#50D167'
              background='#2b9e3e'
              onPress={this.resume}
            />
          </ButtonsRow>
        )}
        <LapsTable laps={laps} timer={timer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 70,
    fontWeight: '200',
    width: 100,
    paddingVertical: 5
  },
  timerContainer: {
    flexDirection: 'row',
  }
})


export default Stopwatch;
