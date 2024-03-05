import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, textInputConfig,invalid }) => {
  const inputStyles= [styles.input];
  if(textInputConfig && textInputConfig.multiline){
    inputStyles.push(styles.inputMultiLine)
  }
  if(invalid){
    inputStyles.push(styles.invalidInput)
  }
  return (
    <View style={[styles.container,style]}>
      <Text style={[styles.label,invalid&& styles.invalidLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,

  },
  inputMultiLine:{
    minHeight: 100,
    textAlignVertical: 'top',
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  }
});

export default Input;
