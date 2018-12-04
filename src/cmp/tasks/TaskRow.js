import React, { Fragment } from 'react'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'

import {
    removeTask
} from "../../actions/tasks"

class TaskRow extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            expanded: false,
            editMode: false
        }

        this.onClickMore = this.onClickMore.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
        this.onEditDone = this.onEditDone.bind(this)
        this.onClickRemove = this.onClickRemove.bind(this)
    }

    onClickMore () {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    onClickEdit () {
        this.setState({
            expanded: false,
            editMode: true
        })
    }

    onEditDone () {
        this.setState({
            editMode: false
        })
    }

    onClickRemove () {
        this.props.removeTask(this.props.task._id)
    }

    render() {
        const { task, currentUser } = this.props
        return (
            <Fragment>
                {
                    this.state.editMode 
                        ? <TaskForm task={ task } onEditDone={ this.onEditDone } /> 
                        : (
                            <div>
                                <p>
                                    { task.title }
                                    {
                                        this.state.expanded
                                        ? (
                                            <Fragment>
                                                <br />
                                                { task.description }
                                            </Fragment>
                                        )
                                        : null
                                    }
                                    &nbsp;—&nbsp;<span onClick={ this.onClickMore } >view { this.state.expanded ? 'less' : 'more' }</span>&nbsp;
                                    {
                                        currentUser
                                        ? (
                                            <Fragment>
                                            | <span onClick={ this.onClickEdit } >edit</span>&nbsp;
                                            | <span onClick={ this.onClickRemove } >remove</span>&nbsp; 
                                            </Fragment> 
                                        )
                                        : null
                                    }
                                </p>
                            </div>                                    
                        )
                }
            </Fragment>
        )    
    }
}

export default connect(
    state => ({
        currentUser: state.user.currentUser
    }),
    dispatch => ({
        removeTask: (id) => dispatch(removeTask(id))
    })
)(TaskRow)