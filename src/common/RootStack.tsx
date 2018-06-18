import {
  createStackNavigator
} from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { TaskDetailScreen } from "../screens/TaskDetailScreen";


export const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: TaskDetailScreen
  }
}, {
    initialRouteName: "Home"
  });