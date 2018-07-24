import React from 'react'

const DisplayArray = (props) => {
    console.log(props)
    return (
        props.listOfNames.map(name => <li>{name}</li>)
    )
}

export default DisplayArray
