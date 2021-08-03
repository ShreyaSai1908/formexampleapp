import React, { useState } from 'react';

function Form (props) {
  const [username, setUsername] = useState()

  const handleChangeUsername = e => {
    setUsername(e.target.value)
  }

  const handleSubmit = event => {
    alert(username)
    event.preventDefault()
  }

  
    return (
      <form onSubmit={handleSubmit}>
        Username:
        <input
          type="text"
          value={username}
          onChange={handleChangeUsername}
        />
      </form>
    )
  
}

export default Form;