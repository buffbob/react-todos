import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#11ff2210',
            padding: '10px',
            margin: '5px',
            border: 'solid 2px #eee',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'

        }
    }

    render() {

        // destructure the vars
        // const id = this.props.todo.id
        // const title = this.props.todo.title
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                        (this, id)} />
                    <span style={itemStyle}>{title}</span>
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>

                </p>
            </div>

        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const itemStyle = {
    margin: '10px'
}

const btnStyle = {

    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default TodoItem
