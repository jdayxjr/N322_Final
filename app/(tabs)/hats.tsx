import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const ShopTab = () => {
  const hats = [
    { id: '1', name: 'Baseball Cap', price: '$15.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVAhLSkrwX0_qZd6iqj2PxvWyxsZaLvzNkA&s/100' },
    { id: '2', name: 'Beanie', price: '$12.99', image: 'https://swag-image-proxy.out.swag.com/convert/swag-prod/66059e5c4c69a62f7a737c5b.jpg?format=jpg&height=1024/100' },
    { id: '3', name: 'Fedora', price: '$25.99', image: 'https://www.hicksandbrown.com/cdn/shop/files/hicks-brown-hat-hicks-brown-fairfax-favor-the-waveney-fedora-in-camel-70566967705978_1445x.jpg?v=1727736368/100' },
    { id: '4', name: 'Bucket Hat', price: '$19.99', image: 'https://www.turtlefur.com/cdn/shop/files/hy0RNI6f2gxiWzgSwMQ1Yph0Tyk4gafs-1.jpg?v=1727790113/100' },
    { id: '5', name: 'Sun Hat', price: '$22.99', image: 'https://www.hatsunlimited.com/cdn/shop/files/Saint_Martin_1487_Wide_Brim_Sun_Hat_Profile_Back__58934.1667422430.1280.1280.jpg?v=1697010500/100' },
    { id: '6', name: 'Trucker Hat', price: '$14.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71U_0Q2pfWtMysljmE79tH4wpeZz-bO3P5w&s/100' },
  ];

  const renderHatItem = ({ item }) => (
    <TouchableOpacity style={styles.hatCard}>
      <Image source={{ uri: item.image }} style={styles.hatImage} />
      <Text style={styles.hatName}>{item.name}</Text>
      <Text style={styles.hatPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shop Hats</Text>
      <FlatList
        data={hats}
        renderItem={renderHatItem}
        keyExtractor={(item) => item.id}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  hatList: {
    paddingBottom: 20,
  },
  hatCard: {
    marginBottom: 15,
    padding: 15,
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
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  hatPrice: {
    fontSize: 16,
    color: '#888',
  },
});

export default ShopTab;
