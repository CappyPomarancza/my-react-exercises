import React from 'react'
import Task from './Task'
import PaperRefined from '../Components/PaperRefined';

const List = (props) => (
    <PaperRefined>
        {
            props.tasksList.map(
                (task, index) => (
                    <Task
                        task={task}
                        key={task.key}
                    />
                )
            )
        }
    </PaperRefined>

)

export default List 