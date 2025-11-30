import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../components/screens/home/home";
import { LoginScreen } from "../components/screens/login/login";
import { QuizScreen } from "../components/screens/quiz/quiz";
import { ResultScreen } from "../components/screens/result/result";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Quiz: {
      screen: QuizScreen,
    },
    result: {
      screen: ResultScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
