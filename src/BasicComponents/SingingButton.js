import React from 'react'


const SingingButton = (props) => {
    const defaultMAkeSound = () => alert(props.sound)
    return (
        <div>
            <button
                onClick={props.makeSound || defaultMAkeSound}
            >
                {props.label}
            </button>
        </div>
    )
}

export default SingingButton