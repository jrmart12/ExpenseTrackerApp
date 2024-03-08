import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";


const ExpensesOutput = ({ expenses, expensesPeriod,fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>
  if(expenses.length>0){
    content = <ExpensesList expenses={expenses}/>
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  }
});

export default ExpensesOutput;
