import React from 'react'
import { Link } from 'react-router-dom'

const About = () => (
   <div>
      <p>这张页面是关于我们的页面</p>
      <Link to="/home">返回首页</Link>
   </div>
)

export default About