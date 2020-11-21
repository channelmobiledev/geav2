import React from 'react';
import {Text, View} from 'react-native';
import {NavigationState} from '@react-navigation/native';
import COLORS from '../constants/colors';

export interface Props {}

interface State {}

export class ActivitiesScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Example text aasdas</Text>
      </View>
    );
  }
}
