// Utilidades de React Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';
import UserList from '../screens/UserList';

// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'Inicio',
        tabBarActiveTintColor: '#FFC300', // Color activo de la pestaña
        headerStyle: {
          backgroundColor: '#FFC300', // Color del header
        },
        headerTintColor: '#fff', // Color del texto en el header
        tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
          <Ionicons name="home" color={color} size={24} /> // `color` proviene de React Navigation
        ),
      }}
    />

    <Tab.Screen
      name="PokemonList"
      component={PokemonList}
      options={{
        title: 'Lista Pokemon Fetch',
        tabBarActiveTintColor: '#3b4cca',
        headerStyle: {
          backgroundColor: '#3b4cca',
        },
        headerTintColor: '#fff',
        tabBarIcon: ({ color }) => (
          <Ionicons name="list" color={color} size={24} />
        ),
      }}
    />
          <Tab.Screen
        name="UserList"
        component={UserList} // Agrega la nueva pantalla aquí
        options={{
          title: 'Lista de Usuarios',
          tabBarActiveTintColor: '#28a745',
          headerStyle: {
            backgroundColor: '#28a745',
          },
          headerTintColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={24} />
          ),
        }}
      />
  </Tab.Navigator>

  );
}
