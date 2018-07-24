import React from 'react'
import HelloWorld from './HelloWorld'
import DispalyName from './DisplayName'
import DisplayArray from './DisplayArray'
import WhatReactRenders from './WhatReactRenders'
import SingingButtonWitjBorder from './SingingButtonWithBorder'

const BasicComponent = () => (
    <div>
        <h1>Basic Components </h1>
        <HelloWorld />
        <DispalyName
            firstname={'Kacper'}
            lastname={'Swietlaga'}
        />
        <DisplayArray
            listOfNames={['ala', 'ela', 'izabela']} />
        <WhatReactRenders />
        <SingingButtonWitjBorder
            label={'Make Sound'}
            sound={'Wlazł kotek na płotek'} />


    </div>

)

export default BasicComponent