import { View, Text } from "react-native";
import { useEffect, useContext, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import {
  getDateMinusDays,
  getCutDateDays,
  getPayDateDays,
} from "../utils/date";
import { fetchExpenses } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
const AtlantidaExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (
      expense.date >= date7DaysAgo &&
      expense.date <= today &&
      expense.date >= getCutDateDays(today, 11) &&
      expense.date <= getPayDateDays(today, 6) &&
      expense.type === "Atlantida"
    );
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
  function errorHandler() {
    setError(null);
    getExpenses();
  }
  useEffect(() => {
    getExpenses();
  }, []);
  if (error && !isFetching) {
    return <ErrorOverlay error={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <ExpensesOutput
      expensesPeriod="Atlantida Last 30 days"
      expenses={recentExpenses}
      fallbackText="Atlantida for the last 30 days"
    />
  );
};

export default AtlantidaExpenses;
