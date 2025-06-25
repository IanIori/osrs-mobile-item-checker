import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const HomeScreen = ({ navigation }: any) => {
  const [itemName, setItemName] = useState('');
  const [error, setError] = useState('');

  const searchItem = async () => {
    try {
      setError('');
      const response = await fetch(`https://prices.runescape.wiki/api/v1/osrs/mapping`);
      const data = await response.json();

      const item = data.find((i: any) => i.name.toLowerCase() === itemName.toLowerCase());
      if (!item) {
        setError('Item não encontrado');
        return;
      }

      const priceRes = await fetch(`https://prices.runescape.wiki/api/v1/osrs/latest?id=${item.id}`);
      const priceData = await priceRes.json();

      navigation.navigate('Detalhes', {
        itemData: {
          ...item,
          price: priceData.data[item.id],
        },
      });
    } catch (err) {
      setError('Erro ao buscar item');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome do Item"
        value={itemName}
        onChangeText={setItemName}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={searchItem} style={styles.button}>
        Buscar
      </Button>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  input: { marginBottom: 10 },
  button: { marginBottom: 20 },
  error: { color: 'red', marginTop: 10 },
});

export default HomeScreen;