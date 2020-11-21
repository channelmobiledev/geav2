import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActivitiesScreen} from './src/screens/ActivitiesScreen';
import {InfoScreen} from './src/screens/InfoScreen';
import {MapScreen as MapScreen} from './src/screens/SettingsScreen';
import COLORS from './src/constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

function DashboardNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
        name="Activities"
        component={ActivitiesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
        name="Map"
        component={MapScreen}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
