import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';


class TimePickers extends Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      isVisible: false,
      chosenTimer: ''
    };
  }

  handleTimer = (time) => {
    this.setState({
      isVisible: false,
      chosenTimer: moment(time).format('h:mm:ss a')
    })
  }

  showTimer = () => {
    this.setState({
      isVisible: true
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }
    render() {
      return (
        <View style={styles.container}>
           <Text style={{color: 'red', fontSize: 20, marginBottom: 100}}>
             {this.state.chosenDate}
           </Text>
           <TouchableOpacity
             onPress={this.showPicker}
             style={styles.button}
           >
             <Text style={styles.text} >Show DatePicker</Text>
           </TouchableOpacity>
               <DateTimePicker
                   cancelTextIOS={'Exit'}
                   confirmTextIOS={'OK'}
                   isVisible = {this.state.isVisible}
                   onConfirm = {this.handlePicker}
                   onCancel = {this.hidePicker}
                   mode={'datetime'}
                   is24Hour={true}

               />
         </View>

      );
    }
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
      },
      button: {
        width: 250,
        height: 50,
        backgroundColor: '#566d7c',
        borderRadius: 30,
        justifyContent: 'center',
        marginTop: 15
      },
      text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
      }
  });


export default TimePickers;
