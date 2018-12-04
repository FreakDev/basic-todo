import React from "react"
import { connect } from "react-redux"

import { refreshList } from "../../actions/tasks"

import TaskRow from "./TaskRow"
import TaskForm from "./TaskForm"

class Tasks extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.refreshList()
    }

    render () {
        const props = this.props

        return (
            <div className="tasks">
                <h2>Tasks</h2>
                {
                    props.list.length 
                    ? (
                        <ul className="tasks-list">
                            {
                                props.list.map(t => {
                                    return <li key={ t._id } ><TaskRow task={t} /></li>
                                })
                            }
                        </ul>
                    )
                    : <span>No task yet</span>
                }
                <div className="tasks-form">
                    <h3>Add Task</h3>
                    <TaskForm />
                </div>
            </div>
        )    
    }
}

export default connect(
    state => ({
        list: state.tasks.list
    }),
    dispatch => ({
        refreshList: () => dispatch(refreshList())
    })
)(Tasks)