// ============================================================
//  Tarea Corta 4 - React Native
//  App de demostración: consumo de una API REST pública
//  API utilizada: https://jsonplaceholder.typicode.com/users
// ============================================================
 
// Se importa React y los dos hooks necesarios de la tarea:
//   - useState: para guardar datos que cambian 
//   - useEffect: para ejecutar código cuando la pantalla se monta
import React, { useState, useEffect } from 'react';
 
import {
  SafeAreaView,    // Área segura para no chocar con la barra superior del celular
  View,            // Contenedor genérico 
  Text,            // Para mostrar texto
  FlatList,        // Lista optimizada para renderizar muchos elementos
  StyleSheet,      // Para definir los estilos
  ActivityIndicator, // El spinner que gira mientras carga
  StatusBar,
} from 'react-native';
 
// URL de la API pública 
const API_URL = 'https://jsonplaceholder.typicode.com/users';
 
export default function App() {
  // ---------- ESTADOS ----------
  // usuarios: aquí se guarda la lista que devuelve la API 
  const [usuarios, setUsuarios] = useState([]);
  // cargando: true mientras se espera la respuesta; muestra el spinner
  const [cargando, setCargando] = useState(true);
  // error: guarda un mensaje si algo sale mal en la petición
  const [error, setError] = useState(null);
 
  // ---------- EFECTO ----------
  // El arreglo vacío [] al final es para que se ejecute esto una vez
  useEffect(() => {
    obtenerUsuarios();
  }, []);
 
  // ---------- FUNCIÓN QUE CONSUME LA API REST ----------
  const obtenerUsuarios = async () => {
    try {
      // 1. Se hace la llamada HTTP GET con fetch()
      const respuesta = await fetch(API_URL);
 
      // 2. Verifica que la respuesta sea correcta (código 200-299)
      if (!respuesta.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
 
      // 3. Se hace la respuesta a formato JSON
      const datos = await respuesta.json();
 
      // 4. Se guardan los datos en el estado para mostrarlos en pantalla
      setUsuarios(datos);
    } catch (err) {
      // Si algo falla se guarda
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };
 
  // Esta función recibe un usuario y devuelve la tarjeta que se ve en pantalla
  const renderizarUsuario = ({ item }) => (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{item.name}</Text>
      <Text style={styles.dato}>📧 {item.email}</Text>
      <Text style={styles.dato}>📞 {item.phone}</Text>
      <Text style={styles.dato}>🏢 {item.company.name}</Text>
    </View>
  );
 
  // ---------- PANTALLA MIENTRAS CARGA ----------
  if (cargando) {
    return (
      <SafeAreaView style={styles.centrado}>
        <ActivityIndicator size="large" color="#4A6CF7" />
        <Text style={styles.textoCarga}>Cargando usuarios...</Text>
      </SafeAreaView>
    );
  }
 
  // ---------- PANTALLA SI HUBO UN ERROR ----------
  if (error) {
    return (
      <SafeAreaView style={styles.centrado}>
        <Text style={styles.textoError}>⚠️ Ocurrió un error:</Text>
        <Text style={styles.textoError}>{error}</Text>
      </SafeAreaView>
    );
  }
 
  // ---------- PANTALLA PRINCIPAL (datos cargados) ----------
  return (
    <SafeAreaView style={styles.contenedor}>
      <StatusBar barStyle="light-content" />
 
      {/* Encabezado de la app */}
      <View style={styles.encabezado}>
        <Text style={styles.titulo}>Lista de Usuarios</Text>
        <Text style={styles.subtitulo}>Datos obtenidos de una API REST</Text>
      </View>
 
      {/* La lista que recorre el arreglo de usuarios y dibuja cada tarjeta */}
      <FlatList
        data={usuarios}                          // El arreglo de datos
        keyExtractor={(item) => item.id.toString()} // Una clave única por elemento
        renderItem={renderizarUsuario}           // Cómo se ve cada elemento
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}
 
// ============================================================
//  ESTILOS
// ============================================================
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F2F4F8',
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F4F8',
  },
  encabezado: {
    backgroundColor: '#4A6CF7',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitulo: {
    fontSize: 13,
    color: '#DDE3FF',
    marginTop: 4,
  },
  lista: {
    padding: 16,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
  },
  nombre: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1A1A2E',
    marginBottom: 8,
  },
  dato: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  textoCarga: {
    marginTop: 12,
    fontSize: 15,
    color: '#4A6CF7',
  },
  textoError: {
    fontSize: 15,
    color: '#D9534F',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
