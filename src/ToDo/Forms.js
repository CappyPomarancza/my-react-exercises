import React from 'react'
import PaperRefined from '../Components/PaperRefined'
import RaisedButton from 'material-ui/RaisedButton'

const Forms = (props) => (
    <PaperRefined>
        <input
            onChange={props.onNewTaskTextChanged}
            type={"text"}
            //placeholder={'Wpisz Zadanie'}
            value={props.newTaskText}
        />

        <RaisedButton
            label={'Dodaj'}
            primary={true}
        />
    </PaperRefined>
)

export default Forms 