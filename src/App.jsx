import React from 'react'
import Tollbar from './component/Tollbar'
import TopBar from './component/TopBar'
import Editor from './component/Editor'

function App() {
  return (
    <>
      <TopBar />
      <div className='ToolEditor'>
        <Tollbar />
        <Editor />
      </div>


    </>
  )
}

export default App