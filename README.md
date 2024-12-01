# ReactPokemon
Aplicación React con Manejo de Sesión y Consumo de API

###Descripción de los Archivos

1. src/components/Login.js
Este archivo contiene el componente de login donde los usuarios pueden ingresar su nombre de usuario y contraseña. Si las credenciales son correctas, el usuario será redirigido al Home. Si son incorrectas, se mostrará una alerta.

2. src/components/Home.js
Este es el componente principal de la aplicación que muestra una tabla de Pokémon obtenida desde la API de PokeAPI. La tabla está paginada y muestra el nombre y la imagen del Pokémon. El componente también incluye un botón para cerrar sesión.

3. src/redux/actions.js
Este archivo contiene las acciones para manejar la autenticación del usuario. La acción login se dispara cuando el usuario inicia sesión con éxito, y la acción logout se usa para cerrar la sesión.

4. src/redux/reducers.js
Este archivo contiene el reductor para manejar los cambios en el estado de autenticación. Utiliza un estado inicial con isAuthenticated: false y actualiza el estado según la acción LOGIN_SUCCESS o LOGOUT.

5. src/redux/store.js
Aquí defines el store de Redux, donde se combina el reductor de autenticación y se configura el estado global de la aplicación.

6. src/App.js
En este archivo, defines las rutas de la aplicación usando React Router. La ruta /home está protegida por el estado de autenticación, redirigiendo a la página de login si el usuario no está autenticado.

7. src/index.js
Este archivo es el punto de entrada de la aplicación. Aquí se configura el provider de Redux para que el store sea accesible desde cualquier componente. También se renderiza el componente App, que contiene las rutas principales de la aplicación.

Resumen:
-React y ReactDOM: Importamos React para usar JSX y ReactDOM para renderizar la aplicación en el DOM.

-Provider: Importamos el Provider de react-redux, que es un componente de alto nivel que se encarga de pasar el store de Redux a toda la aplicación.

-store: Importamos el store que hemos creado en src/redux/store.js.

-App: Importamos el componente principal App que contiene todas las rutas de nuestra aplicación.

-ReactDOM.render: Renderizamos el componente App dentro de un Provider, pasando el store como prop. Esto hace que el store de Redux esté disponible para todos los componentes de la aplicación.

-document.getElementById('root'): Seleccionamos el elemento con id root en el HTML donde se montará la aplicación React.

