import React, { Component, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import TimerCountdown from "react-native-timer-countdown";
import TimerFunction from '../components/TimerFunction';
import RoundButton from '../components/RoundButton';
import ButtonsRow from '../components/ButtonsRow';

class TCountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start: 0,
      now: 0,
      stop: []
    };
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }



  start = () => {
    const now = new Date().getTime();
    this.setState({
      start: now,
      now
    });
    this.timer = setInterval(() => {
      this.setState({
        now: new Date().getTime()
      })
    }, 100 );
  }

  stop = () => {
    clearInterval(this.timer);
    const { now, start } = this.state;
    this.setState({
      stop: [now - start],
      start: 0,
      now: 0
    });
  }

  reset = () => {
    this.setState({
      start: 0,
      now: 0,
    });
  }

  resume = () => {
    const now = new Date().getTime()
    this.setState({
      now: start,
      start,
    })
    this.timer = setInterval(() => {
      this.setState({ start: new Date().getTime()})
    }, 100);
  }

  render() {
    const { now, start } = this.state;
    const timer = now - start;

    return (
      <View style={styles.container} >

            <TimerCountdown
              initialMilliseconds={60000 * 60}
              //onTick={(milliseconds) => console.log("tick", milliseconds)}
              onExpire={() => Alert("complete")}
              formatMilliseconds={(milliseconds) => {
                const remainingSec = Math.round(milliseconds / 1000);
                const seconds = parseInt((remainingSec % 60).toString(), 10);
                const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                const hours = parseInt((remainingSec / 3600).toString(), 10);
                const s = seconds < 10 ? '0' + seconds : seconds;
                const m = minutes < 10 ? '0' + minutes : minutes;
                let h = hours < 10 ? '0' + hours : hours;
                h = h === '00' ? '' : h + ':';
                return h + m + ':' + s;
              }}
              allowFontScaling={true}
              style={styles.timer}
            />
        <View style={styles.button}>
        {start === 0 && (
          <RoundButton
              title='Reset'
              color='#f5e9e9'
              background='#cf180e'
              onPress={this.reset}
            />
        )}
        </View>
        </View>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 80,
    justifyContent:'center'
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 60,
    fontWeight: '200',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 20
  },
  timerContainer: {
    flexDirection: 'row',
  }
})

export default TCountDown;
