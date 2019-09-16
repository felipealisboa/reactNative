import React from 'react';
import { View, StyleSheet } from 'react-native';

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  );
}

const styles = StyleSheet.create({
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  }
  })


export default ButtonsRow;
