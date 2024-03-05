import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

function renderExpenseItem(itemData){
  return <ExpenseItem {...itemData.item}/>
  
}

const ExpensesList = ({expenses}) => {
  return (
    <View>
      <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=>item.id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});

export default ExpensesList