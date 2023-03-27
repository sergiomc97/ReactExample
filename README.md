```markdown
# Componente Boton en React

El componente Boton es un botón que puede cambiar su estilo dependiendo de si ha sido clickeado o no. Este componente es importado desde el archivo `boton.js` y utiliza un archivo de estilos `boton.css` para definir sus estilos.

## Props

El componente Boton acepta tres props:

- `texto`: Un string que representa el texto a mostrar en el botón.
- `esclick`: Un booleano que indica si el botón ha sido clickeado o no.
- `manejarClick`: Una función que se ejecuta cuando el botón es clickeado.

## Uso

Para utilizar el componente Boton, se debe importar en el archivo que se desee utilizar. Luego, se debe renderizar con las props necesarias, como se muestra a continuación:

```jsx
<Boton texto="Clickeame" esclick={true} manejarClick={() => { console.log('Boton clickeado')}} />
```

En este ejemplo, se muestra cómo utilizar el componente Boton con las props necesarias. El botón mostrará el texto "Clickeame", tendrá el estilo `boton-click` porque `esclick` es true, y ejecutará la función `manejarClick` cuando sea clickeado.

## Estilos

El archivo `boton.css` define dos clases de estilos para el botón:

- `boton-reiniciar`: El estilo por defecto del botón.
- `boton-click`: El estilo que se aplica cuando el botón es clickeado.

Para cambiar los estilos del botón, se pueden modificar estas clases en el archivo `boton.css`.

# Componente Carta en React
El componente Carta es una tarjeta que contiene información sobre un tema en particular. Este componente es importado desde el archivo `carta.js` y utiliza componentes de `Material-UI` para crear una tarjeta con imagen y contenido expandible.

## Props
El componente Carta acepta cuatro props:

`imagen:` Un string que representa la URL de la imagen que se mostrará en la tarjeta.
`titulo:` Un string que representa el título de la tarjeta.
`descripcion:` Un string que representa la descripción de la tarjeta.
## Uso
Para utilizar el componente Carta, se debe importar en el archivo que se desee utilizar. Luego, se debe renderizar con las props necesarias, como se muestra a continuación:

```jsx
<Carta imagen="https://ejemplo.com/imagen.png" titulo="Titulo de la tarjeta" descripcion="Descripción de la tarjeta" />
```
En este ejemplo, se muestra cómo utilizar el componente Carta con las props necesarias. La tarjeta mostrará la imagen en la URL proporcionada, el título de la tarjeta y la descripción de la tarjeta.

## Estilos
El archivo carta.js utiliza componentes de Material-UI para crear la tarjeta. Se define un estilo personalizado para el contenedor de la imagen y se utiliza el componente Accordion para crear el contenido expandible en la tarjeta.

Para cambiar los estilos de la tarjeta, se pueden modificar estos componentes y estilos en el archivo `carta.js`.


# Componente Clicks en React
El componente Clicks es una sección de una página web que contiene una imagen y dos botones. Este componente es importado desde el archivo clicks.js y utiliza los componentes Boton y Contador para crear los botones y el contador de clics respectivamente.

## Props
El componente Clicks no acepta props.

## Uso
Para utilizar el componente Clicks, se debe importar en el archivo que se desee utilizar. Luego, se debe renderizar el componente en la sección deseada de la página, como se muestra a continuación:

```jsx
<Clicks />
```
En este ejemplo, se muestra cómo utilizar el componente Clicks. La sección se renderizará con una imagen, un contador de clics y dos botones.

## Estilos
El archivo clicks.js utiliza estilos CSS importados desde el archivo clicks.css. Se definen estilos personalizados para el contenedor principal y para la imagen en la sección.

Para cambiar los estilos de la sección, se pueden modificar estos estilos en el archivo clicks.css.


# Componente Marvel Character

Este componente de React muestra información detallada de un personaje de Marvel utilizando la API de Marvel.

## Estructura del componente

El componente `Comp1` utiliza las siguientes variables y funciones:

- `now`: Almacena la fecha y hora actual en milisegundos.
- `data`: Almacena la información del personaje obtenida de la API.
- `loader`: Indica si se está cargando la información del personaje.
- `publicKey` y `privateKey`: Claves de API de Marvel para la autenticación.
- `params`: Parámetros necesarios para la autenticación en la API de Marvel.
- `apiUrl`: URL de la API de Marvel para obtener información del personaje.
- `useEffect`: Ejecuta la función de búsqueda de datos al montar el componente.

### Función fetchData

Esta función es llamada dentro del `useEffect`. Realiza una solicitud a la API de Marvel utilizando la URL y los parámetros de autenticación. Procesa la respuesta, extrae los datos del personaje y los almacena en la variable `data`.

### Renderizado del componente

El componente muestra una tarjeta con la información del personaje, incluyendo su nombre, descripción e imagen. Si la información aún se está cargando, se muestra un esqueleto en lugar de la tarjeta.

## Cómo usar

1. Importa `Comp1` en tu componente principal:

```jsx
import Comp1 from './Comp1';
```

2. Utiliza el componente `Comp1` en tu aplicación, proporcionando el `id` del personaje que deseas mostrar:

```jsx
function App() {
  return (
    <div>
      <h1>Personaje de Marvel</h1>
      <Comp1 id="1009368" />
    </div>
  );
}

export default App;
```

3. Reemplaza `"1009368"` con el `id` del personaje que deseas mostrar.

4. Instala la dependencia `md5`:

```bash
npm install md5
```

5. Asegúrate de agregar tus propias claves de API de Marvel en lugar de las proporcionadas en el ejemplo de código.

Con estos pasos, podrás utilizar el componente `Comp1` para mostrar información detallada de un personaje de Marvel en tu aplicación React.

# Componente Heroe

Este componente es una función de React que muestra una lista de comics de Marvel ordenados por fecha de foco. Para ello, hace uso de la API pública de Marvel.

## Props

El componente no recibe props.

## Uso

El componente puede ser usado en cualquier parte de una aplicación de React. Para ello, simplemente se debe importar el componente y renderizarlo en la parte deseada de la aplicación. Por ejemplo:

```javascript
import Heroe from './Heroe';

function App() {
  return (
    <div className="App">
      <Heroe />
    </div>
  );
}

export default App;
```

## Dependencias

El componente hace uso de las siguientes dependencias:

- React
- md5
- Grid (de Material-UI)
- Carta (componente personalizado)

## Funcionamiento

El componente hace una petición a la API de Marvel para obtener la lista de comics ordenados por fecha de foco. Para ello, se hace uso de la función useEffect de React que se ejecuta después de que el componente se monte en el DOM.

La respuesta de la API se almacena en un estado local del componente (data), el cual es iterado para mostrar cada comic en una tarjeta (Carta). Cada tarjeta contiene una imagen, título y descripción del comic.


# Componente MenuBar

Este componente representa la barra de navegación de la aplicación SuperHero. Se compone de un menú desplegable y una barra de búsqueda. La barra de búsqueda permite al usuario buscar cómics en la API de Marvel.

## Props

Este componente no recibe ninguna propiedad.

## Funciones

Este componente define las siguientes funciones:

- `handleOpenNavMenu`: Esta función se encarga de abrir el menú desplegable al hacer clic en el botón correspondiente.
- `handleCloseNavMenu`: Esta función se encarga de cerrar el menú desplegable.
- `Search`: Esta función permite al usuario buscar cómics en la API de Marvel mediante el título del cómic.

## Dependencias

Este componente depende de los siguientes módulos:

- react
- @mui/material
- @mui/icons-material
- react-icons
- react-router-dom
- md5
- ./card

## Uso

Este componente se utiliza en el archivo App.js para definir la barra de navegación de la aplicación.




### ¡Repositorio de Sergiomc! :wave:
Este es un proyecto con fines lúdicos y educativos creado por Sergio Mora. Por favor, ten en cuenta que este código se proporciona tal cual, sin garantías de ningún tipo, expresas o implícitas. El autor no se hace responsable del mal uso que se pueda dar a este código ni de los posibles daños que pueda causar.

### ¡Utiliza el código bajo tu propio riesgo! :warning:
Se recomienda encarecidamente que se pruebe en un entorno controlado antes de utilizarlo en un entorno de producción. Si tienes alguna pregunta, comentario o sugerencia, no dudes en contactar conmigo. ¡Estaré encantado de recibir tus comentarios!

### ¡Diviértete! :smile:
Espero que este código te resulte útil y que puedas aprender algo nuevo con él. Recuerda que el objetivo principal de este proyecto es pasar un buen rato mientras aprendemos juntos. ¡Gracias por tu interés en este proyecto!
:sun_with_face: