# Tarea Corta 3 – Aplicación React Native (Consumo de API REST)

Aplicación móvil de demostración desarrollada con **React Native** y **Expo** que consume una API REST pública y muestra la información en una lista.

Estudiantes: 

# Rodrigo Rene Elias Ramirez
# Dennis Segura Badilla
# Sergio Alejandro Monge Moya

## 📱 Descripción

La app hace una petición HTTP a la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), obtiene una lista de usuarios en formato JSON y los muestra en pantalla dentro de tarjetas, incluyendo nombre, correo, teléfono y empresa.

Conceptos aplicados:
- Consumo de API REST con `fetch()`
- Manejo de respuestas JSON
- Hooks `useState` y `useEffect`
- Renderizado de listas con `FlatList`
- Estados de carga y de error

## 🛠️ Tecnologías

- React Native
- Expo
- JavaScript

## ▶️ Instrucciones de ejecución

### Opción A – Rápida, sin instalar nada 

1. Entrar a [https://snack.expo.dev](https://snack.expo.dev)
2. Borrar el contenido del archivo `App.js` que aparece por defecto.
3. Copiar y pegar todo el contenido del archivo `App.js` de este repositorio.
4. La vista previa se ejecuta automáticamente a la derecha. Puede verla en el navegador (pestaña **Web**) o escaneando el QR con la app **Expo Go** en su celular.

### Opción B – De forma local 

1. Instalar Node.js desde [nodejs.org](https://nodejs.org) si no lo tiene.
2. Crear un proyecto nuevo de Expo:
   ```bash
   npx create-expo-app@latest miApp --template blank
   cd miApp
   ```
3. Reemplazar el archivo `App.js` generado por el `App.js` de este repositorio.
4. Iniciar el proyecto:
   ```bash
   npx expo start
   ```
5. Escanear el código QR con la app **Expo Go** (Android/iOS) o presionar `w` para abrirlo en el navegador.
