import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function App() {
  const [hatSizes, setHatSizes] = useState([]);
  const [hatTypes, setHatTypes] = useState([]);
  const [colors, setColors] = useState([]);
  
  const [hatSizeText, setHatSizeText] = useState('');
  const [hatTypeText, setHatTypeText] = useState('');
  const [colorText, setColorText] = useState('');

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingList, setEditingList] = useState(null);

  // Function to add items to the corresponding list
  const handleAddItem = (itemText, setList, listItems, setText) => {
    if (itemText.trim() !== '') {
      setList([...listItems, itemText]);
      setText(''); // Clear the input after adding
    }
  };

  // Function to delete items from the corresponding list
  const handleDeleteItem = (index, setList, listItems) => {
    setList(listItems.filter((_, i) => i !== index));
  };

  // Function to edit an item in the list
  const handleEditItem = (index, setText, listItems) => {
    setText(listItems[index]);
    setEditingIndex(index);
    setEditingList(listItems);
  };

  // Function to save edited item
  const handleSaveEditedItem = (index, newText, setList) => {
    const updatedList = [...editingList];
    updatedList[index] = newText;
    setList(updatedList);
    setEditingIndex(null); // Reset editing mode
    setEditingList(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iHat Size</Text>
      
      {/* Hat Size List */}
      <Text style={styles.listTitle}>Hat Size</Text>
      <TextInput
        style={styles.input}
        value={hatSizeText}
        onChangeText={setHatSizeText}
        placeholder="Enter Hat Size"
      />
      <Button
        title={editingIndex === null ? "Add Hat Size" : "Save Changes"}
        onPress={() => {
          if (editingIndex === null) {
            handleAddItem(hatSizeText, setHatSizes, hatSizes, setHatSizeText);
          } else {
            handleSaveEditedItem(editingIndex, hatSizeText, setHatSizes);
          }
        }}
      />
      <FlatList
        data={hatSizes}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => handleEditItem(index, setHatSizeText, hatSizes)} />
              <Button title="Delete" onPress={() => handleDeleteItem(index, setHatSizes, hatSizes)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
      {/* Hat Type List */}
      <Text style={styles.listTitle}>Hat Type</Text>
      <TextInput
        style={styles.input}
        value={hatTypeText}
        onChangeText={setHatTypeText}
        placeholder="Enter Hat Type"
      />
      <Button
        title={editingIndex === null ? "Add Hat Type" : "Save Changes"}
        onPress={() => {
          if (editingIndex === null) {
            handleAddItem(hatTypeText, setHatTypes, hatTypes, setHatTypeText);
          } else {
            handleSaveEditedItem(editingIndex, hatTypeText, setHatTypes);
          }
        }}
      />
      <FlatList
        data={hatTypes}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => handleEditItem(index, setHatTypeText, hatTypes)} />
              <Button title="Delete" onPress={() => handleDeleteItem(index, setHatTypes, hatTypes)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      
      {/* Color List */}
      <Text style={styles.listTitle}>Color</Text>
      <TextInput
        style={styles.input}
        value={colorText}
        onChangeText={setColorText}
        placeholder="Enter Color"
      />
      <Button
        title={editingIndex === null ? "Add Color" : "Save Changes"}
        onPress={() => {
          if (editingIndex === null) {
            handleAddItem(colorText, setColors, colors, setColorText);
          } else {
            handleSaveEditedItem(editingIndex, colorText, setColors);
          }
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{item}</Text>
            <View style={styles.buttons}>
              <Button title="Edit" onPress={() => handleEditItem(index, setColorText, colors)} />
              <Button title="Delete" onPress={() => handleDeleteItem(index, setColors, colors)} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    fontSize: 16,
    marginBottom: 10, // Add spacing between input and button
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10, // Add spacing between list items
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
});
