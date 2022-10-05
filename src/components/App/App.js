
import React from 'react'
import List from '../Util/List'

const bodyContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
  padding: '10px'
}

const todoListContainer = {
  display: 'flex',
  width: '600px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#00cccc',
  borderRadius: '10px',
  boxShadow: '#ffe6e6',
}

function App() {
  return (
    <div style={bodyContainer}>
      <div style={todoListContainer}>
        <h1>Waris Todo</h1>

        {/* LIST */}
        <List />
      </div>
    </div>
  
  )
}

export default App