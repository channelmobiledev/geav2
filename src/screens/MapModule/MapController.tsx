import React, {FunctionComponent} from 'react';
import {MapScreen} from './MapScreen';

type RouteData = {
  route: any;
};

const MapController: FunctionComponent<RouteData> = ({route}) => {
  const {mapAddress} = route.params;

  return <MapScreen mapAddress={mapAddress} />;
};

export default MapController;
