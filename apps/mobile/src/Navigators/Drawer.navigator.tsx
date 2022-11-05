
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListRequestScreen from "../Entities/Request/List.request.screen";
import ShowRequestScreen from "../Entities/Request/Show.request.screen";
import ListShiftScreen from "../Entities/Shift/List.shift.screen";
import ShowShiftScreen from "../Entities/Shift/Show.shift.screen";
import ListDepartmentScreen from "../Entities/Department/List.department.screen";
import ShowDepartmentScreen from "../Entities/Department/Show.department.screen";
import ListUserScreen from "../Entities/User/List.user.screen";
import ShowUserScreen from "../Entities/User/Show.user.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListRequestScreen"
            component={ListRequestScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowRequestScreen"
          component={ShowRequestScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListShiftScreen"
            component={ListShiftScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowShiftScreen"
          component={ShowShiftScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListDepartmentScreen"
            component={ListDepartmentScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowDepartmentScreen"
          component={ShowDepartmentScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUserScreen"
            component={ListUserScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUserScreen"
          component={ShowUserScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
