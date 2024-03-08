import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/AtlantidaExpenses";
import AllExpenses from "./screens/AllExpenses";
import { GlobalStyles } from "./constants/styles";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "./components/UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";
import BacExpenses from "./screens/BacExpenses";
import AtlantidaExpenses from "./screens/AtlantidaExpenses";
import DaviviendaExpenses from "./screens/DaviviendaExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon={"add"}
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("ManageExpense")}
            />
          );
        },
      })}
    >
      <BottomTabs.Screen
        name="BacExpenses"
        component={BacExpenses}
        options={{
          title: "Bac Expenses",
          tabBarLabel: "BAC",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-bitcoin" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="DaviviendaExpenses"
        component={DaviviendaExpenses}
        options={{
          title: "Davivienda Expenses",
          tabBarLabel: "Davivienda",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AtlantidaExpenses"
        component={AtlantidaExpenses}
        options={{
          title: "Atlantida Expenses",
          tabBarLabel: "Atlantida",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-angular" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor: GlobalStyles.colors.primary500,
          },
          headerTintColor: 'white'
        }}>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense} options={{
            presentation: 'modal'
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}
