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
        newTaskText: ''
        
    }
    

    onNewTaskTextChanged = (event, value) => {
        this.setState({
            newTaskText: value
        })
    }

    onAddNewTaskClickHandler = () => {
        this.setState({
            tasks: this.state.tasks.concat({
                isCompleted: false,
                text: this.state.newTaskText,
                key: Math.random()
            }),
            newTaskText: ''
        })
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('jfddl5-app-todo-state'))

        if (lastState === null) return

        this.setState(lastState)
    }

    componentWillUnmount() {
        localStorage.setItem('jfddl5-app-todo-state', JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}

export default ToDo 