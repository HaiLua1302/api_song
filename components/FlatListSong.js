import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const SongShow = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        key={new Date()}
        source={{ uri: item.image }}
        style={styles.imgAvata}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
        <Text>Author: {item.singer}</Text>
        <Text>Date Created: {item.publication}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#b0e0e6',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  imgAvata: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginRight: 30,
    marginTop: 10
  },
});
export default SongShow;