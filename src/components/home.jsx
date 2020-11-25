import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
   <div>
      <p>路由首页</p>
      <Link to="/about">关于我们</Link>
   </div>
)

export default Home