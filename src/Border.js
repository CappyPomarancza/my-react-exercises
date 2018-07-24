import React from 'react'

const styles = { border: '1px solid black' }

const Border = (props) => (
    <div style={styles} >
        Hakuna Matata
        {props.children}
    </div>
)



export default Border
