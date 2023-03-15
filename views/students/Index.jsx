import React from 'react'

function Index(props) {

    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.students.map((student, index) => 
                    <li key={index}>
                        <a href={`/students/${index}`}><strong>{student.name}</strong></a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Index