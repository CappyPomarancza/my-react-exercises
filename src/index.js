import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import './index.css'
//import from src folder (import my own components)
import App from './App'


ReactDOM.render(
    <MuiThemeProvider>

        <App />
    </MuiThemeProvider>,
    /* wywołanie componentu w charakterystycznym tagu dla JSX, który produkuje kawałek drzewa virtual DOM */
    document.getElementById('root'))

