import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableOpacity,
  Picker
} from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

import ButtonsRow from '../components/ButtonsRow';
import RoundButton from '../components/RoundButton';


class CountdownTimer extends Component {

    constructor() {
      super();
      this.state = {

        hours_Counter:'01',
        minutes_Counter: '00',
        seconds_Counter: '00',
        startDisable: false
      }
      this.startStopTimer = this.startStopTimer.bind(this);
      this.resetTimer = this.resetTimer.bind(this);
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
      this.reset = this.reset.bind(this);
    }



    componentWillUnmount() {
      clearInterval(this.state.timer);
    }

    startStopTimer() {
      this.setState({
        isTimerStart: true,
        resetTimer: false
      });
    }

    resetTimer(){
      this.setState({
        isTimerStart: false,
        resetTimer: true
      });
    }

    start = () => {
      let timer = setInterval(() => {
        var num = (Number(this.state.seconds_Counter) - 1).toString(),
                count = this.state.minutes_Counter;

              if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) - 1).toString();
                num = '00';
              }

              if (Number(this.state.minutes_Counter) == 59) {
                count = (Number(this.state.hours_Counter) - 1).toString();
                num = '00';
              }

              this.setState({
                hours_Counter: count.length == 1 ? '0' + count : count,
                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num
              });
            }, 1000);
            this.setState({ timer });

            this.setState({startDisable : true})
    }

    reset = () => {
        this.setState({
        timer: null,
        hours_Counter: '00',
        minutes_Counter: '00',
        seconds_Counter: '00',
      });
    }

    stop = () => {
      clearInterval(this.state.timer);
      this.setState({startDisable : false})
    }


    render() {
      return (
        <View style={styles.container}>
        <Timer
            totalDuration={this.state.timerDuration} msecs
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
           />
           <ButtonsRow>
              <TouchableOpacity
                activeOpacity={0.6}
                disabled={this.state.startDisable} >
                <RoundButton
                  title='Start'
                  color='#50D167'
                  background='#2b9e3e'
                  onPress={this.start}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                >
                <RoundButton
                  title='Stop'
                  color='#E33935'
                  background='#9e2b31'
                  onPress={this.stop}
                />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                disabled={this.state.startDisable} >
                <RoundButton
                  title='Reset'
                  color='#FFFFFF'
                  background='#6c756e'
                  onPress={this.reset}
                />

              </TouchableOpacity>
          </ButtonsRow>
        </View>
      );
    }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000000',
    color: '#FFFFFF'
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  button: {
    borderWidth: 10,
    borderColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonStop: {
    borderColor: 'red'
  },
  buttonText: {
    fontSize: 40,
    color: '#94b8f2'
  },
  buttonTextStop: {
    color: '#c9f2ee'
  }

})

export default CountdownTimer;
