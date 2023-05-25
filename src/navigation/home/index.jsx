import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/index";
import { COLORS } from "../../constants/index";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Rubik-Bold",
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default HomeNavigator;
