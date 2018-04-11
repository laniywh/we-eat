import React from 'react'

export default ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff',
      boxShadow: 'rgba(0,0,0,0.1) 0 0 2px 0',
      margin: '10px auto',
      padding: '5px',
      maxWidth: '500px',
    }}
  >
    {children}
  </div>
)
