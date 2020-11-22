import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export interface Props {
  mapAddress: string;
}

interface State {}

export class MapScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  getMapAddress() {
    // Retrieve map address

    return 'https://source.unsplash.com/random';
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').height}>
          <Image
            style={styles.mapContainer}
            source={{
              uri: this.getMapAddress(),
            }}
          />
        </ImageZoom>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
