import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'



const SingingButton = (props) => {
    const defaultMAkeSound = () => alert(props.sound)
    return (
        <div>
            <RaisedButton
                label={props.label}
                primary={true}
                onClick={props.makeSound || defaultMAkeSound}
            />
            <RaisedButton
                label={props.label}
                secondary={true}
                onClick={props.makeSound || defaultMAkeSound}
            />
            <RaisedButton
                label={props.label}
                default={true}
                onClick={props.makeSound || defaultMAkeSound}
            />
        </div>
    )
}

export default SingingButton