import React, {FunctionComponent} from 'react';
import {RouteProp} from '@react-navigation/native';
import MapScreen from './MapScreen';

type RootStackParamList = {
  Map: {mapAddress: string};
};

type MapScreenRouteProp = RouteProp<RootStackParamList, 'Map'>;

type Props = {
  route: MapScreenRouteProp;
};

const MapController: FunctionComponent<Props> = ({route}) => {
  const {mapAddress} = route.params;

  return <MapScreen mapAddress={mapAddress} />;
};

export default MapController;
