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
