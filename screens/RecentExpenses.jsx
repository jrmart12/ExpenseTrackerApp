import { View, Text } from "react-native";
import { useEffect, useContext, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  async function getExpenses() {
    setIsFetching(true);
    try {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    } catch (error) {
      setError("could not fetch expenses");
    }
    setIsFetching(false);
  }
  function errorHandler(){
    setError(null);
    getExpenses();
  }
  useEffect(() => {

    getExpenses();
  }, []);
  if (error && !isFetching) {
    return <ErrorOverlay error={error} onConfirm={errorHandler}/>;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expensesPeriod="Last 7 days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days"
    />
  );
};

export default RecentExpenses;
