import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {InfoScreen} from './src/screens/InfoScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActivitiesController from './src/screens/ActivitiesModule/ActivitiesController';
import MapController from './src/screens/MapModule/MapController';
import COLORS from './src/constants/colors';
import ActivityModel from './src/models/ActivityModel';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppDefaultTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primaryColor,
    background: COLORS.background,
    card: COLORS.card,
    text: COLORS.text,
    notification: COLORS.secondaryColor,
  },
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={AppDefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={DashboardNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const DashboardNav = () => {
  const dummyData: ActivityModel[] = [
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
    {name: 'Example'},
  ];

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        initialParams={{data: dummyData}}
        name="Activities"
        component={ActivitiesController}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
        initialParams={{mapAddress: 'https://source.unsplash.com/random'}}
        name="Map"
        component={MapController}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
        name="Information"
        component={InfoScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
