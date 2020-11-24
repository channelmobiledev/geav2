import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import COLORS from '../../constants/colors';

export interface Props {
  mapAddress: string;
}

const MapScreen = (props: Props) => {
  const showMapView = () => {
    return (
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').height}>
        <Image
          style={styles.mapContainer}
          source={{
            uri: props.mapAddress,
          }}
        />
      </ImageZoom>
    );
  };

  const showNoMapView = () => {
    return (
      <Text style={styles.noMapText}>There's no map on this event 🗺️</Text>
    );
  };

  return (
    <View style={styles.container}>
      {props.mapAddress ? showMapView() : showNoMapView()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  noMapText: {
    padding: 25,
    fontSize: 18,
  },
});

export default MapScreen;
