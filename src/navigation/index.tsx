import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ItemDetails from '../screens/ItemDetails';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Início" component={HomeScreen} />
      <Stack.Screen name="Detalhes" component={ItemDetails} />
    </Stack.Navigator>
  );
}