import React from 'react'
import Border from './Border'
import SingingButton from './SingingButton';
import Paper from 'material-ui/Paper';
const style = {
    height: 150,
    width: 150,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

const SingingButtonWithBorder = (props) => (
    <Paper
    style={style}
        zDepth={5} >

        <SingingButton
            label={props.label}
            sound={props.sound}
            makeSound={props.makeSound}
        />
    </Paper>


)
export default SingingButtonWithBorder