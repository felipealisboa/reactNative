
import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

class Countdown extends Component {
    constructor(props) {
      super(props);
      //initialize the counter duration
      this.state = {
        totalDuration: '',
      };
    }

    onDoneCountdown = () => {
    Alert.alert("Countdown Finish.");
    }

    onPressCountdown = () => {
    Alert.alert("Countdown Component Press.");
    }

}

export default Countdown;
