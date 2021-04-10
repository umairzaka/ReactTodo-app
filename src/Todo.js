import React from 'react'

const Todo = ({text}) => { 
    return (
        <div>
            <h3>{text}</h3>
            <button>x</button>
        </div>
    )
}

export default Todo
