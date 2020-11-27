import React, {FunctionComponent} from 'react';
import {RouteProp} from '@react-navigation/native';
import ActivitiesScreen from './ActivitiesScreen';
import ActivityModel from '../../models/ActivityModel';

type RootStackParamList = {
  Activities: {data: ActivityModel[]};
};

type MapScreenRouteProp = RouteProp<RootStackParamList, 'Activities'>;

type Props = {
  route: MapScreenRouteProp;
};

const ActivitiesController: FunctionComponent<Props> = ({route}) => {
  const {data} = route.params;

  return <ActivitiesScreen data={data} />;
};

export default ActivitiesController;
