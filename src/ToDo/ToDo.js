import React from 'react'
import Forms from './Forms'
import Task from './Task'
import List from './List'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Wynieś śmieci', key: '123' },
            { isCompleted: false, text: 'Zmyj Gary!', key: '321' }
        ],
        newTaskText: 'ala'
    }
    onNewTaskTextChanged = (event) => {
        this.setState({
            newTaskText: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                />
                <List
                    tasksList={this.state.tasks}


                />
            </div>
        )
    }
}

export default ToDo 