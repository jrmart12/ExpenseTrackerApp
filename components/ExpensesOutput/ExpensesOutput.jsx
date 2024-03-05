import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: " a pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: " a pair of galsses",
    amount: 159.99,
    date: new Date("2022-01-21"),
  },
  {
    id: "e3",
    description: " a pair of pants",
    amount: 9.99,
    date: new Date("2022-01-30"),
  },
];

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
