import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
//import from src folder (import my own components)
import App from './App'


ReactDOM.render(
<App />, /* wywołanie componentu w charakterystycznym tagu dla JSX, który produkuje kawałek drzewa virtual DOM */
 document.getElementById('root'))

