### React

`npm create vite@latest`
initializes the react project file

follow given instructions to set up

- file name
- framework: React, Vanilla, Preact,..
- language: JS, TS,..
  `npm i`
  installs the packages
  `npm run dev`
  starts the live server

# JSX

React uses jsx which creates html elements.
Babel compiles the jsx.
Functions have to return a component to return an element.
They can only return ONE element.

- many elements can live in a div or a fragment (<></>)
  - fragment acts like an invisible div
  - fragment does not have margin, border, or padding

# Case

React uses uppercase first letter in functions and variables

## React Snippets

rafc = react arrow function component

```
export const FunctionName = () =>{
    return(
        <>Element</>
    )
}
```

THERE IS A DIFFERENCE BETWEEN `export const functionname` AND `export default App`.

Import a component by using `rafc` and placing it in curly braces in the import staement.
` import { Blah } from './comp/Blah/Blah'`

Import a page/jsx file with `rafce` with no curly braces in the import statement. Adds a `export default Thing`.
` import Thing from './comp/Thing/Thing'`

## Props

Naming is very important!
Use `props` to access data in an element

```
export const Function = (props) =>{
    return{
        <h3> {props.data} <h3/>
    }
}
```

OR

```
export const Function = ({data}) =>{
    return{
        <h3> {data} <h3/>
    }
}
```

## States & Hooks

Look up lifecycles

`import { useState } from "react"`

`const [variable, function] = useState(value)`

## Routes

1. Before launching server run `npm i react-router-dom`.
2. On main.jsx `import {BroserRouter} from 'react-router-dom'`.
3. On main.jsx wrap `<App/>` in `<BrowerRouter></BrowerRouter>`.
4. On App.jsx `import {Route,Routes} from 'react-router-dom'`.
5. On App.jsx make `<Routes></Routes>` the top level return (can be within a fragment)
6. On App.jsx call routes with `<Route path="/routename" element={<ElementName />} />` within `<Routes></Routes>`
