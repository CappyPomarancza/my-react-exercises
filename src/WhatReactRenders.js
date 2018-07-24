import React from 'react'

const string = 'Ala ma węża!'
const number = 123
const bool = true 
//const emptyArray= []
const arrWithSomething = ['ala ', 'ela',  ' bela']


const WhatReactRenders = () => (
    <div>
        <p>Mój zajebisty component!</p><br/>
        {string}<br/><br/>
        {number}<br/>
        {bool}
        <br />
        <ul>
            {
                arrWithSomething.map((string, index) => <li key={index}>{string}</li>)
            }
        </ul>
    </div>
)

export default WhatReactRenders
