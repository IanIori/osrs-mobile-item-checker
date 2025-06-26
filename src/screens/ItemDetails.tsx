import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Detalhes">;

export default function ItemDetails({ route }: Props) {
  const { itemData } = route.params;

  // Estado para os preços atualizados que vamos buscar
  const [priceData, setPriceData] = useState<{
    high: number;
    highTime: number;
    low: number;
    lowTime: number;
  } | null>(null);

  const [loadingPrice, setLoadingPrice] = useState(true);
  const [errorPrice, setErrorPrice] = useState(false);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch(
          `https://prices.runescape.wiki/api/v1/osrs/latest?id=${itemData.id}`
        );
        const json = await res.json();

        const priceInfo = json.data?.[itemData.id];
        if (priceInfo) {
          setPriceData(priceInfo);
        } else {
          setErrorPrice(true);
        }
      } catch (err) {
        setErrorPrice(true);
      } finally {
        setLoadingPrice(false);
      }
    }

    fetchPrice();
  }, [itemData.id]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card>
        <Card.Title title={itemData.name} />
        <Card.Content>
          <Text>ID: {itemData.id}</Text>
          <Text>Examine: {itemData.examine}</Text>
          <Text>Membros: {itemData.members ? "Sim" : "Não"}</Text>
          <Text>Valor base (shop): {itemData.value.toLocaleString()} gp</Text>
          <Text>High Alch: {itemData.highalch.toLocaleString()} gp</Text>
          <Text>Low Alch: {itemData.lowalch.toLocaleString()} gp</Text>
          <Text>Limite por 4h: {itemData.limit.toLocaleString()}</Text>

          {loadingPrice && <Text>Carregando preço...</Text>}
          {errorPrice && <Text>Preço não disponível para este item.</Text>}

          {priceData && (
            <>
              <Text>
                Preço de mercado (alta): {priceData.high.toLocaleString()} gp
              </Text>
              <Text>
                Preço de mercado (baixa): {priceData.low.toLocaleString()} gp
              </Text>
            </>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
