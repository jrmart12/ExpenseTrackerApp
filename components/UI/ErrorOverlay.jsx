import { View,StyleSheet,Text,Button } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const ErrorOverlay = ({error,onConfirm}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.text]}>An error occurred</Text>
      <Text style={styles.text}>{error}</Text>
      <Button onPress={onConfirm} title='Okay'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500
  },
  text:{
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ErrorOverlay