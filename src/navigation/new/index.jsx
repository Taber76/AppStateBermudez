import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { New } from "../../screens/index";
import { COLORS } from "../../constants/index";

const Stack = createNativeStackNavigator();

const NewNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="New"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Rubik-Bold",
        },
      }}>
      <Stack.Screen name="New" component={New} />
    </Stack.Navigator>
  );
};

export default NewNavigator;
