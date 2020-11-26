import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationState} from '@react-navigation/native';
import COLORS from '../../constants/colors';
import ViewPager from '@react-native-community/viewpager';
import ActivitiesListView from '../../components/ActivitiesListView';

export interface Props {}

const ActivitiesScreen = (props: Props) => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key={1}>
        <ActivitiesListView />
      </View>
      <View key={2}>
        <ActivitiesListView />
      </View>
      <View key={3}>
        <ActivitiesListView />
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default ActivitiesScreen;
