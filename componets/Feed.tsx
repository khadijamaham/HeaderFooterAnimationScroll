
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { Card, Avatar, IconButton } from 'react-native-paper';

// Generate 100 fake feed items
const data = Array.from({ length: 100 }).map((_, i) => ({
  id: i.toString(),
  username: `user${i + 1}`,
  avatar: `https://randomuser.me/api/portraits/men/${(i % 50) + 1}.jpg`,
  image: `https://picsum.photos/id/${(i % 100) + 10}/400/300`,
  caption: `This is post #${i + 1} - Loving the view! #nature`,
  time: `${i + 1}h ago`,
}));

type FeedItem = typeof data[0];
const renderItem = ({ item }: { item: FeedItem }) => (
  <Card style={styles.card}>
    <Card.Title
      title={item.username}
      subtitle={item.time}
      left={(props) => <Avatar.Image {...props} source={{ uri: item.avatar }} />}
      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    />
    <Card.Cover source={{ uri: item.image }} style={styles.image} />
    <Card.Content>
      <Text style={styles.caption}><Text style={styles.username}>{item.username}</Text> {item.caption}</Text>
    </Card.Content>
    <Card.Actions>
      <IconButton icon="heart-outline" size={24} onPress={() => {}} />
      <IconButton icon="comment-outline" size={24} onPress={() => {}} />
      <IconButton icon="share-outline" size={24} onPress={() => {}} />
    </Card.Actions>
  </Card>
);

export default function Feed() {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    paddingVertical: 16,
  },
  card: {
    width: 350,
    marginVertical: 8,
    borderRadius: 16,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    height: 250,
    borderRadius: 0,

  },
  caption: {
    marginTop: 8,
    fontSize: 15,
    color: '#222',
  },
  username: {
    fontWeight: 'bold',
    color: '#222',
  },
});