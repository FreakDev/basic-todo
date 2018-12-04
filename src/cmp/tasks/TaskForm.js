import React, { Fragment } from "react"
import { connect } from "react-redux"

import {
    createTask,
    editTask
} from "../../actions/tasks"

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.form = null
        this.onSubmit = this.onSubmit.bind(this)
        this.onClickCancel = this.onClickCancel.bind(this)
    }

    onSubmit (e) {
        e.preventDefault()

        const props = this.props;

        let values = {}
        Array.prototype.slice.call(this.form.elements)
            .filter(e => e.tagName === "INPUT")
            .forEach(e => {
                values[e.name] = e.value
            })

        if (props.task) {
            props.editTask(props.task._id, values.title, values.description)
        } else {
            props.createTask(values.title, values.description)
        }

        this.props.onEditDone && this.props.onEditDone()
    }

    onClickCancel () {
        this.props.onEditDone && this.props.onEditDone()
    }

    render() {
        const props = this.props

        return (
            <Fragment>
                { props.currentUser 
                    ? (
                        <div>
                            <form ref={ r => this.form = r } onSubmit={ this.onSubmit }>
                                title : <input type="text" name="title" defaultValue={ props.task && props.task.title || "" } /> 
                                description : <input type="text" name="description" defaultValue={ props.task && props.task.description || "" } />
                                <button type="submit">SUBMIT</button>
                            </form>
                            { props.task 
                                ? (<button onClick={ this.onClickCancel } >cancel</button>)
                                : null
                            }
                        </div>
                    )
                    : <span>You must be logged in to create / edit tasks</span>
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
        createTask: (title, description) => dispatch(createTask(title, description)),
        editTask: (id, title, description) => dispatch(editTask(id, title, description))
    })
)(TaskForm)