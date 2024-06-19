# Overview de la Aplicación Pokémon

La aplicación Pokémon permite a los usuarios explorar una lista de Pokémon, agregar Pokémon a favoritos y ver los detalles de cada uno. Está estructurada para ser intuitiva y fácil de navegar, utilizando Vuetify para asegurar que todos los componentes sean responsive y visualmente atractivos. A continuación, se detalla cómo funciona la aplicación y la estructura del proyecto.

## Funcionalidades Principales

### Get Started View

- Esta vista inicial proporciona una introducción a la aplicación y una forma de comenzar.

### All Pokemons List View

- Lista todos los Pokémon disponibles.
- Permite buscar Pokémon por nombre.
- Cada Pokémon tiene la opción de ser añadido a la lista de favoritos.
- Al hacer clic en un Pokémon, se muestra una modal con detalles como nombre, peso, altura y tipo.

### Favorite Pokémon List View

- Muestra solo los Pokémon que han sido marcados como favoritos por el usuario.

## Estructura del Proyecto

El proyecto está estructurado de manera modular y siguiendo las mejores prácticas de Vue.js y Vuex:

### Views

- **Get Started View**: Introducción y punto de inicio de la aplicación.
- **All Pokemons List View**: Lista todos los Pokémon disponibles y permite interactuar con ellos.
- **Favorite Pokémon List View**: Muestra los Pokémon marcados como favoritos.

### Certain Components

- **PokemonCardList.vue**: Componente para mostrar cada Pokémon con opciones para marcar como favorito y ver detalles.
- **PokemonDetailsModal.vue**: Modal que muestra los detalles de un Pokémon seleccionado.
- **PokemonListAll.vue**: Componente que utiliza Composition API para la lista de todos los Pokémon, aprovechando las capacidades reactivas de Vue 3.

### Frameworks & Libs

- **Vuetify**: Utilizado para la interfaz de usuario, proporcionando componentes responsive y estilizados que cumplen con las guías de diseño material.
- **Vue Router**: Para el enrutamiento entre las diferentes vistas de la aplicación.
- **Vuex**: Para la gestión del estado global, especialmente para mantener la lista de Pokémon favoritos y los detalles del Pokémon seleccionado.

### Uso de Composition API en `PokemonListAll.vue`

- **Composition API**: Es el enfoque recomendado para la reactividad en Vue 3, permitiendo una mejor organización y reutilización del código.
- **PokemonListAll.vue**: Este componente utiliza Composition API para manejar la lógica de la lista de Pokémon. Por ejemplo, gestionar el estado local de la lista de Pokémon, realizar llamadas a la API para obtener datos, y manejar las interacciones del usuario de manera eficiente y clara.

## Levantar el Proyecto

Para levantar el proyecto de la aplicación Pokémon, aquí están los pasos básicos que debes seguir. Estos asumen que ya tienes Node.js y npm (o yarn) instalados en tu sistema. Vamos a incluir los comandos necesarios:

### Pasos para Levantar el Proyecto

1. **Instalación de Dependencias**

   - Abre una terminal en la raíz del proyecto.
   - Ejecuta el siguiente comando para instalar todas las dependencias necesarias listadas en `package.json`:
     ```
     npm install
     ```
   - Si estás usando `yarn`, ejecuta:
     ```
     yarn install
     ```

2. **Compilar y Servir la Aplicación**

   - Después de instalar las dependencias, puedes compilar y servir la aplicación usando el siguiente comando:
     ```
     npm run dev
     ```
   - Si prefieres usar `yarn`, ejecuta:
     ```
     yarn dev
     ```

3. **Acceder a la Aplicación**
   - Una vez que la compilación haya terminado y el servidor esté corriendo, abre tu navegador web.
   - Navega a `http://localhost:3000` (o al puerto que se especifique en tu configuración de desarrollo) para ver la aplicación Pokémon.

### Detalles Adicionales

- **Vue CLI**: Si estás usando Vue CLI para este proyecto, `npm run dev` o `yarn dev` generalmente inicia un servidor de desarrollo con hot-reloading habilitado. Esto significa que los cambios que realices en el código se reflejarán automáticamente en el navegador sin necesidad de reiniciar manualmente el servidor.

- **Personalización de Comandos**: Dependiendo de cómo esté configurado tu proyecto y el entorno de desarrollo, los comandos pueden variar ligeramente. Asegúrate de consultar el `package.json` para verificar los scripts personalizados que puedan estar definidos específicamente para este proyecto.
