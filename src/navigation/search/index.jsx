import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../../screens/index";
import { COLORS } from "../../constants/index";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Rubik-Bold",
        },
      }}>
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />

      <Stack.Screen
        name="Products"
        component={Products}
        options={({ route }) => ({
          title: route.params.categoryName,
          headerStyle: {
            backgroundColor: route.params.categoryColor,
          },
        })}
      />

      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => ({
          title: route.params.name,
          headerStyle: {
            backgroundColor: route.params.color,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
