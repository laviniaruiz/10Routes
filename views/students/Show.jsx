import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.student.name} {props.student.lastName}</h1>
            <p><strong>Gender::</strong> {props.student.gender}</p>
            <p><strong>Age:</strong> {props.student.age}</p>
        
            <a href="/students">Back</a>
        </div>
    )
}

export default Show;