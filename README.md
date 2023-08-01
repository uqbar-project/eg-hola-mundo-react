
[![Build React App](https://github.com/uqbar-project/eg-hola-mundo-react/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/uqbar-project/eg-hola-mundo-react/actions/workflows/build.yml) ![coverage](./badges/coverage/coverage.svg)

# Hola mundo: primer ejemplo React

![demo](video/demo2023.gif)

En este primer ejemplo veremos los primeros conceptos de la tecnología React

- componentes
- propiedades (_props_)
- manejo del estado de un componente 

## Creando nuestro proyecto

Lo hacemos siguiendo [los pasos que están en la wiki](https://wiki.uqbar.org/wiki/articles/react-instalacion.html#tocAnchor-1-5).

## Componente principal

La aplicación levanta como una _lambda_, es decir una función que devuelve como output el HTML a mostrar (lo que debe renderizar):

```jsx
const App = () => {
  return (
    <div className="App">
      <Saludo nombre="Martín" />
      <Saludo nombre="Mariano" />
      <Contador />
      <Contador />
    </div>
  )
}
```

Recordemos que `const App = () => {}` es el formato en _arrow functions_ similar a

```jsx
function App() {
  return (
    ...
  )
}
```

Esta forma de definir un componente presentacional de React es la variante **funcional**, porque pensamos una página como una función. El código que escribimos es [**JSX**](https://reactjs.org/docs/introducing-jsx.html), **es javascript** con

- tags HTML
- más código javascript que se evalúa
- más los componentes React que nosotros definimos 
- más componentes React que importamos de bibliotecas de terceros 

## Componente que saluda

El componente que saluda recibe como parámetro un string, que corresponde al nombre de la persona que queremos saludar. El componente principal de React llama al que saluda mediante un atributo:

```jsx
<Saludo nombre="Martín" />
```

Saludo se define como otro componente funcional que sabe mostrar un div:

```javascript
const Saludo = (props) => {
  return (
    <p data-testid="saludo">
      Hola, {props.nombre}
    </p>
  )
}
```

Entonces, la vista es una función.

## Props

Aquí vemos que lo que enviamos con el siguiente formato

```jsx
 <Saludo nombre="Martín" />
```

lo recibimos como

```javascript
{props.nombre}
```

en el componente original. ¿Pero qué es [_props_](https://reactjs.org/docs/components-and-props.html)? 

> Props es un mapa de propiedades que cada componente mantiene en forma aislada. De esa manera podemos tener dos componentes que saludan y cada uno muestra diferente información en base al parámetro que enviamos.

## Contador

El contador es un componente que tiene cambios de estado. Comienza inicialmente en cero, pero luego el usuario puede

- hacer click en el botón que suma uno al contador
- o hacer click en el botón que resta uno al contador

## El estado

Mientras que las _props_ no modifican el estado del componente (son de lectura), el _state_ está íntimamente relacionado con el ciclo de vida de un componente React. Cuando un evento dispara un cambio, se genera un **nuevo estado** que provoca que se renderice nuevamente la vista.

![image](images/react-cycle.jpeg)

En nuestro caso, el estado es simplemente **un número**.

Al iniciar el componente el contador será 0, y cuando el usuario presione click sobre el botón Sumar o Restar se debe generar un nuevo estado, con el contador incrementado o decrementado. 

Para poder mantener un estado, vamos a utilizar un **hook** que nos ofrece dos funciones: una para obtener el valor del estado, y el otro para generar un nuevo estado, lo que va a producir un nuevo render.

```jsx
export const Contador = (props) => {
  const [contador, setContador] = useState(0)
```

La función `useState`

- recibe un valor (en este caso el número 0)
- y devuelve una lista de 2 funciones: el primer elemento es una función que permite conocer el valor del estado y el segundo permite asignarle un nuevo valor (generando un nuevo estado)

Por ejemplo: `contador()` nos devuelve inicialmente 0, `setContador(1)` produce un nuevo estado que dispara el render de la función Contador.

```jsx
return (
  <Card>
    <CardContent>
      ...
      <h3 data-testid="contadorValue">
        {contador}
      </h3>
      <Button
        variant="contained" data-testid="restar" size="medium" color="secondary"
        onClick={restar}>
        -
      </Button>
      <Button
        variant="contained" data-testid="sumar" size="medium" color="primary"
        onClick={sumar}>
        +
      </Button>
      <br />
    </CardContent>
  </Card>
)
```

## Programación reactiva

Debido a que además el único elemento del tag asociado al state es el tag Typography que muestra un título H3 de HTML, React manipula en forma inteligente el [DOM](https://es.wikipedia.org/wiki/Document_Object_Model) para que la interacción con el browser sea mínima. Con F12 activamos las herramientas de desarrollo del navegador:

![DOM](video/ReactVDomChange.gif)

## Repaso del ciclo de vida del contador

1. Inicialmente, nuestro estado tiene un contador en cero. 
2. Se muestra la vista con el contador en cero.
3. El usuario presiona el botón "+"
4. Eso dispara el evento sumar(), que modifica el estado a `1` mediante la invocación a `setContador(1)`
5. Al cambiar el estado, React vuelve a ejecutar el método render() buscando los tags del DOM que se han modificado
6. El usuario ve en el navegador el valor "1" asociado al contador

## Cuidados a tener con el efecto

ReactJS trabaja con las ideas de la programación funcional, esto implica que nuestros valores dentro del estado deben ser **inmutables**. En el caso de un número el mismo diseño de los números como valores inmutables lo hace intuitivo, pero si trabajamos con personas que tienen un nombre, es importante cambiar la referencia a la persona de manera de que React detecte los cambios:

```js
// INCORRECTO, si pepita referencia al estado actual
setPersona(pepita)

// CORRECTO, se genera un nuevo objeto -> React dispara el render
setPersona(Object.assign(new Persona(), pepita))
```

Más adelante veremos otros ejemplos de uso.

# Frameworks de presentación

Para la presentación utilizamos [Material-UI](https://material-ui.com/), por si el lector quiere conocer.

# Testing

Para el testeo unitario utilizaremos JEST + [React Testing Library](https://testing-library.com/), un framework de testeo unitario que viene con varias funciones utilitarias y opciones de debugging que nos facilitarán la vida cuando los tests fallen. El primer test es que el componente App se renderiza sin romperse, lo que llamamos comunmente un _smoke test_ o test de humo que verifica por ejemplo que hay un saludo a Mariano:

```js
test('smoke test for App', () => {
  render(<App />)
  const saludoAMariano = screen.getByText(/Mariano/i)
  expect(saludoAMariano).toBeInTheDocument()
})
```

No obstante, esta variante es muy frágil, si queremos saludar a otra persona el test se va a romper y eso no necesariamente indica que la aplicación no levantó. Podemos modificarlo para buscar que haya algún tipo de encabezado (h1, h2, h3, etc.):

```js
test('smoke test for App', () => {
  render(<App />)
  const headings = screen.getAllByRole('heading')
  // expect(headings).not.toBe.empty puede tirar un error molesto del linter
  expect(headings).not.toBe('') 
})
```

## Componente que saluda

El segundo test prueba en forma aislada que el componente que saluda lo hace en forma correcta:

```javascript
describe('cuando le paso un nombre', () => {
  it('lo muestra', () => {
    render(<Saludo nombre='Manola' />)
    const appIntro = screen.getByTestId('saludo')
    expect(appIntro).toHaveTextContent('Hola, Manola')
  })
})
```

- con `render` envolvemos el componente Saludo en un objeto _wrapper_ pasándole como nombre 'Manola'
- el objeto screen que guarda el estado del último render, y nos ofrece métodos helpers para por ejemplo buscar por `data-testid` (el método es `getByTestId`)
- luego chequeamos que el texto de ese tag sea 'Hola, Manola'

Algo bueno que tienen los tests de React es que conservan su unitariedad, se prueban en forma aislada.

## Contador

Por último vamos a testear el contador envolviendo el componente y luego simulando que apretamos 3 veces el botón "+":

```javascript
describe('cuando se suma', () => {
  it('el contador incrementa', async () => {
    render(<Contador />)
    const botonSumar = screen.getByTestId('sumar')
    act(() => { botonSumar.click() })
    act(() => { botonSumar.click() })
    act(() => { botonSumar.click() })
    const valor = screen.getByTestId('contadorValue')
    expect(valor).toHaveTextContent('3')
  })
})
```

El test espera mostrar el valor '3' en el elemento cuyo atributo `data-testid` sea `contadorValue` (estén atentos a que es un string).

Dentro del test es conveniente envolver todo cambio de estado en una función wrapper `act`:

```js
act(() => { botonSumar.click() })
```

eso permite que se registren correctamente.
