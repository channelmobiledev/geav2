import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

type CardData = {
  name: string;
};

const ActivitiesListView = () => {
  let {width} = Dimensions.get('window');

  let data = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  const [dataProvider, setDataProvider] = useState(
    data.cloneWithRows([
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
      {name: 'Example'},
    ]),
  );

  const layoutProvider = new LayoutProvider(
    (index: number) => {
      return index;
    },
    (type, dim) => {
      dim.width = width;
      dim.height = 70;
    },
  );

  const rowRenderer = (type: any, data: any) => {
    return (
      <View style={styles.container}>
        <Text>Example data: {data.name}</Text>
        <Text>Example message here</Text>
      </View>
    );
  };

  return (
    <>
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider}
        rowRenderer={rowRenderer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 5,
  },
});

export default ActivitiesListView;
