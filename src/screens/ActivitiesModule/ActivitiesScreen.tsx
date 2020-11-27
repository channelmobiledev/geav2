import React from 'react';
import {StyleSheet, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import ActivitiesListView from '../../components/ActivitiesListView';
import ActivityModel from '../../models/ActivityModel';

export interface Props {
  data: ActivityModel[];
}

const ActivitiesScreen = (props: Props) => {
  return (
    <ViewPager style={styles.viewPager} initialPage={0}>
      <View key={1}>
        <ActivitiesListView data={props.data} />
      </View>
      <View key={2}>
        <ActivitiesListView data={props.data} />
      </View>
      <View key={3}>
        <ActivitiesListView data={props.data} />
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
