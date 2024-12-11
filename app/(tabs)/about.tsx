import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About iHats</Text>
      <Text style={styles.description}>
        Welcome to iHats! We are a premier e-commerce website dedicated to offering the best collection of hats for every occasion and style. With over 15 years of experience, we pride ourselves on providing high-quality products and exceptional customer service. Thank you for being part of our journey!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutTab;
