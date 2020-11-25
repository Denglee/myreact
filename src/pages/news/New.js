import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class New extends Component{
   render(){
      return(
         <div className="box">
            <div className="left">
               <ul>
                  <li>
                     <Link to="/new">New</Link>
                  </li>
                  <li>
                     <Link to="/new/newList">NewList</Link>
                  </li>
               </ul>
            </div>
            <div className="right">
               {
                  this.props.routes.map((item,index)=>{
                     return <Route key={index} exact path={item.path} component = {item.component} ></Route>
                  })
               }
            </div>
         </div>
      )
   }
}

export default New

