import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';



const iHatsHomepage = () => {
  const hats = [
    { id: '1', name: 'Baseball Cap', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVAhLSkrwX0_qZd6iqj2PxvWyxsZaLvzNkA&s/100' },
    { id: '2', name: 'Beanie', image: 'https://swag-image-proxy.out.swag.com/convert/swag-prod/66059e5c4c69a62f7a737c5b.jpg?format=jpg&height=1024/100' },
    { id: '3', name: 'Fedora', image: 'https://www.hicksandbrown.com/cdn/shop/files/hicks-brown-hat-hicks-brown-fairfax-favor-the-waveney-fedora-in-camel-70566967705978_1445x.jpg?v=1727736368/100' },
    { id: '4', name: 'Bucket Hat', image: 'https://www.turtlefur.com/cdn/shop/files/hy0RNI6f2gxiWzgSwMQ1Yph0Tyk4gafs-1.jpg?v=1727790113/100' },
  ];

  const renderHatItem = ({ item }) => (
    <TouchableOpacity style={styles.hatCard}>
      <Image source={{ uri: item.image }} style={styles.hatImage} />
      <Text style={styles.hatName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
     
      <Text style={styles.header}>Welcome to iHats</Text>
      <Link href="/sign-in/[[...sign-in]]/page">
          <Text>Sign in</Text>
        </Link>

        <Link href="/sign-up/[[...sign-up]]/page">
          <Text>Sign up</Text>
        </Link>

        <Link href="/sign-up/[[...sign-up]]/page"></Link>
      <Text style={styles.description}>Explore our amazing collection of hats. Tap on any hat to learn more about it!</Text>
      <FlatList
        data={hats}
        renderItem={renderHatItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.hatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  hatList: {
    justifyContent: 'space-between',
  },
  hatCard: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  hatImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  hatName: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default iHatsHomepage;
