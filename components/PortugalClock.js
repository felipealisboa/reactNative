import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var portugalDate;

class PortugalClock extends Component {

  constructor() {
      super();
      this.state = {
          currentTime: null,
          currentDay: null,
          currentHour: null,
          backgroundColor: '',
          open: false
      }
  }

  componentWillMount() {
      this.getCurrentTime();
  }

  componentWillUnmount() {
      clearInterval(this.timer);
  }

  toggleOpen() {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  }


  getCurrentDate = () => {

    var localDate = new Date();
    var localTime = localDate.getTime();
    var localOffSet = localDate.getTimezoneOffset() * 60000;
    var currentUTC = localTime + localOffSet;
    var portugalOffset = -60;
    var portugalTime = currentUTC + (3600000 * portugalOffset);
    portugalDate = new Date(portugalTime);
    }



  getCurrentTime = () => {
      var hour = new Date().getHours() + 4;
      var minutes = new Date().getMinutes();
      var seconds = new Date().getSeconds();
      var am_pm = 'pm';

      var day = new Date().toDateString();

            this.setState({currentHour: hour});
            this.setState({currentDay: day});


          if( minutes < 10 ) {
              minutes = '0' + minutes;
          }

          if( seconds < 10 ) {
              seconds = '0' + seconds;
          }

          if( hour > 12 ) {
              hour = hour - 12;
          }

          if( hour === 0 ) {
              hour = 12;
          }

          if( new Date().getHours() + 4 < 12 ) {
              am_pm = 'am';
          }

          this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });
      };

  componentDidMount() {
      this.timer = setInterval(() => {
          this.getCurrentTime();
  }, 1000)};

  setGradient(currentHour) {
      if (currentHour < 3) {
        this.setState({backgroundColor: '#011548', color: '#ffffff'});
      } else if (currentHour < 6) {
        this.setState({backgroundColor: '#1d5372',color: '#eee07a' });
      } else if (currentHour < 9) {
        this.setState({backgroundColor: '#eee07a', color: '#0D0D0D'});
      } else if (currentHour < 12) {
        this.setState({backgroundColor : '#3885a2', color: '#0D0D0D'});
      } else if (currentHour < 15) {
        this.setState({backgroundColor : '#e6756f', color: '#0D0D0D'});
      } else if (currentHour < 18) {
        this.setState({backgroundColor : '#4a257d', color: '#0D0D0D'});
      } else if (currentHour < 21) {
        this.setState({backgroundColor : '#291c6b', color: '#0D0D0D'});
      } else if (currentHour < 24) {
        this.setState({backgroundColor : '#011548', color: '#ffffff'});
      }
  }

  render() {

      return (

            <View>
              <Text style={styles.h2}>Portugal</Text>
                <Text style={styles.dayText} > { this.state.currentDay }</Text>
                <Text style={styles.timeText} > { this.state.currentTime }</Text>
            </View>

      )
  }
};

const styles = StyleSheet.create({


    timeText: {
    fontSize: 40,
    },

    daysText: {
    fontSize: 25,
    paddingBottom: 0
  },
  h2: {
   fontSize: 30,
   margin: 2,
   alignItems: 'center'
 }
})

export default PortugalClock;
