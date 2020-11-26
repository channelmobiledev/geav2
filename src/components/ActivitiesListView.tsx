import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, ListItem} from 'react-native-elements';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

// TODO Implement the model
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
      <ListItem style={styles.container} bottomDivider>
        <Avatar source={{uri: 'https://source.unsplash.com/random'}} />
        <ListItem.Content>
          <ListItem.Title>{data.name}</ListItem.Title>
          <ListItem.Subtitle>Example subtitle here :D</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
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
  },
});

export default ActivitiesListView;
