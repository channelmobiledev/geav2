import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import ActivityModel from '../models/ActivityModel';

export interface Props {
  data: ActivityModel[];
}

const ActivitiesListView = (props: Props) => {
  const [dataProvider, setDataProvider] = useState(props.data);

  const keyExtractor = (item: ActivityModel, index: number) => index.toString();

  const renderItem = ({item}) => {
    return (
      <ListItem style={styles.container} bottomDivider>
        <Avatar source={{uri: 'https://source.unsplash.com/random'}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.dateTimeStart.toString()}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <>
      <FlatList
        keyExtractor={keyExtractor}
        data={dataProvider}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
});

export default ActivitiesListView;
