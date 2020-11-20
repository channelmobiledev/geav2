import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {SettingsScreen} from './SettingsScreen';

export interface Props {}

interface State {}

const Tab = createBottomTabNavigator();

export class DashboardScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#0000ff'}}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </View>
    );
  }
}

function MyTabs() {
  return (
    <View style={{flex: 1, backgroundColor: '#0000ff'}}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}
