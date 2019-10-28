import React from 'react'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

import '../../sass/sass.scss'
import '../../less/less.less'
import '../../stylus/stylus.styl'

function App () {
    return (
        <div>
            <h1>React JS</h1>
            <p className="sass">SASS</p>
            <p className="less">LESS</p>
            <p className="stylus">STYLUS</p>
            <p className="post-css">POSTCSS</p>
            <div><img src={logo} width={40}/></div>
            <video src={video} width={360} controls poster={logo}></video>
         
        </div>
    )
}

export default App