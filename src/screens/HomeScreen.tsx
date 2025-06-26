import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Text } from "react-native-paper";

const HomeScreen = ({ navigation }: any) => {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://prices.runescape.wiki/api/v1/osrs/mapping`
        );
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError("Erro ao carregar itens");
      }
    };

    fetchItems();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      style={{ padding: 20, backgroundColor: "#ddd", marginVertical: 5 }}
      onPress={() => {
        console.log("Item clicado:", item);
        navigation.navigate("Detalhes", { itemData: item });
      }}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => <Text>Item List</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  itemText: { fontSize: 18 },
  error: { color: "red", marginTop: 10 },
});

export default HomeScreen;
