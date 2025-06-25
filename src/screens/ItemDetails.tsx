import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';

interface ItemDetailsProps {
  route: {
    params: {
      itemData: {
        id: number;
        name: string;
        examine: string;
        members: boolean;
        value: number;
        highalch: number;
        lowalch: number;
        limit: number;
        icon?: string;
        price: {
          high: number;
          highTime: number;
          low: number;
          lowTime: number;
        };
      };
    };
  };
}

const ItemDetails = ({ route }: ItemDetailsProps) => {
  const { itemData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Title title={itemData.name} />
        <Card.Content>
          <Text>ID: {itemData.id}</Text>
          <Text>Examine: {itemData.examine}</Text>
          <Text>Membros: {itemData.members ? 'Sim' : 'Não'}</Text>
          <Text>Valor base (shop): {itemData.value.toLocaleString()} gp</Text>
          <Text>High Alch: {itemData.highalch.toLocaleString()} gp</Text>
          <Text>Low Alch: {itemData.lowalch.toLocaleString()} gp</Text>
          <Text>Limite por 4h: {itemData.limit.toLocaleString()}</Text>
          <Text>Preço de mercado (alta): {itemData.price.high.toLocaleString()} gp</Text>
          <Text>Preço de mercado (baixa): {itemData.price.low.toLocaleString()} gp</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ItemDetails;