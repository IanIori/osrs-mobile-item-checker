import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Pressable, TextInput } from "react-native";
import { Text } from "react-native-paper";

const HomeScreen = ({ navigation }: any) => {
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://prices.runescape.wiki/api/v1/osrs/mapping`
        );
        const data = await response.json();
        setItems(data);
        setFilteredItems(data); // inicializa com tudo
      } catch (err) {
        setError("Erro ao carregar itens");
      }
    };

    fetchItems();
  }, []);

  // Atualiza filteredItems sempre que searchText ou items mudam
  useEffect(() => {
    if (!searchText) {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [searchText, items]);

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => navigation.navigate("Detalhes", { itemData: item })}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar itens..."
        value={searchText}
        onChangeText={setSearchText}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  searchInput: {
    height: 40,
    borderColor: "#999",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },

  itemContainer: {
    backgroundColor: "#e0e0e0", // cinza clarinho
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // sombra android
  },

  itemText: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },

  error: {
    color: "red",
    marginTop: 10,
  },
});

export default HomeScreen;
