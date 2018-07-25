import React from 'react'
import PaperRefined from '../Components/PaperRefined'
import RaisedButton from 'material-ui/RaisedButton'
import { TextField } from 'material-ui';

const Forms = (props) => (
    <PaperRefined>
        <TextField
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