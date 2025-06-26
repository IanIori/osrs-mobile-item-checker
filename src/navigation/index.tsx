import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ItemDetails from "../screens/ItemDetails";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Início"
        component={HomeScreen}
        options={{ title: "Old School Runescape Item checker" }}
      />
      <Stack.Screen name="Detalhes" component={ItemDetails} />
    </Stack.Navigator>
  );
}
