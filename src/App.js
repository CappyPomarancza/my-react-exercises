import React from 'react'
import Border from './Border'
import SingingButton from './SingingButton'

const App = () => (
  <Border>
    <SingingButton
      label={'przycisk 1'}
      sound={'lalalal'}
      makeSound={() => alert('Im from makeSound')}
    />
    <SingingButton
      label={'przycisk 2'}
      sound={'kotki dwa!'}
    />
  </Border>
)



export default App
