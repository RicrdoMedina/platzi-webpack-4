import React from 'react'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

function App () {
    return (
        <div>
            <h1>React JS</h1>
            <div><img src={logo} width={40}/></div>
            <video src={video} width={360} controls poster={logo}></video>
         
        </div>
    )
}

export default App