import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeNavigator from "../home";
import ProfileNavigator from "../profile";
import NewNavigator from "../new";
import SearchNavigator from "../search";
import { COLORS } from "../../constants";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Rubik-Medium",
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.darkGray,
        tabBarIconStyle: {
          fontSize: 24,
        },
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={focused ? color : COLORS.darkGray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchNavigator}
        options={{
          tabBarLabel: "Buscador",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="note-search-outline"
              size={size}
              color={focused ? color : COLORS.darkGray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewTab"
        component={NewNavigator}
        options={{
          tabBarLabel: "Nuevo",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={size}
              color={focused ? color : COLORS.darkGray}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={size}
              color={focused ? color : COLORS.darkGray}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
