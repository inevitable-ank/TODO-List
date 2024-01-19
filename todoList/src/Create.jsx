import React, { useState } from 'react'
import axios from 'axios'

function Create() {

  const [task, setTask] = useState('')

  const HandleClick = () => {
    axios.post('http://localhost:3001/add', {task: task})
    .then(result => {
      location.reload()
    })
    .err(err => console.log(err))
  }
  return (
    <div className="create_form">
        <input type="text" placeholder='Enter Task' value={task} onChange={(event) => setTask(event.target.value)}/>
        <button type="button" onClick={HandleClick}>Add</button>
    </div>
  )
}

export default Create