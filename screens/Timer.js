import React from "react";
import { StyleSheet, View, Alert, TouchableOpacity } from "react-native";
import TimerCountdown from "react-native-timer-countdown";
import ButtonsRow from '../components/ButtonsRow';
import RoundButton from '../components/RoundButton';

const Timer = () => (
  <View style={styles.container}>
    <View style={styles.textdisplay}>
        <TimerCountdown
          initialMilliseconds={100000 * 60}
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
          style={{ fontSize: 20 }}
        />
      </View>
      <ButtonsRow>
         <TouchableOpacity
           activeOpacity={0.6}
            >
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
            >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  textdisplay: {
    backgroundColor: '#FFFFFF',
    width: '70%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
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

export default Timer;
