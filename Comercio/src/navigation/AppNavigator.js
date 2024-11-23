// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriaComponent from '../components/CategoriaComponent';
import AddCategoriaComponent from '../components/AddCategoriaComponent';
import ProductoComponent from '../components/ProductoComponent';
import AddProductoComponent from '../components/AddProductoComponent';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Categorias"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1b35', 
            elevation: 0, 
            shadowOpacity: 0, 
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(255, 255, 255, 0.1)',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
            letterSpacing: 0.5,
          },
          cardStyle: {
            backgroundColor: '#1a1b35', 
          },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Categorias" 
          component={CategoriaComponent}
          options={{ title: 'Categorías' }}
        />
        <Stack.Screen 
          name="Producto" 
          component={ProductoComponent}
          options={({ route }) => ({ 
            title: route.params?.categoriaNombre 
              ? `Productos - ${route.params.categoriaNombre}`
              : 'Productos'
          })}
        />
        <Stack.Screen 
          name="AddCategoria" 
          component={AddCategoriaComponent}
          options={{ title: 'Agregar Categoría' }}
          initialParams={{ refresh: () => {} }} 
        />
        <Stack.Screen 
          name="AddProducto" 
          component={AddProductoComponent}
          options={{ title: 'Agregar Producto' }}
          initialParams={{ refresh: () => {} }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
