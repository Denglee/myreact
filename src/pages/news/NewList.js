import React, {Component} from 'react';
import axios from '../../axios/axios';


class New extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: []
      }
   }
   
   async getData() {
      await axios.get('/Web/total_membership', {})
         .then(res => {
            console.log(res.data.data);
            this.setState({
               data: res.data.data,
            })
         }).catch(res => {
            console.log(res);
         })
   }
   
   activateLasers=(index)=>{
      console.log(index);
   }
   
   componentWillMount() {
      this.getData();
   }
   
   render() {
      return (
         <div className="box">
            {
               this.state.data.map((item, index) => {
                  return <div key={index} onClick={()=>this.activateLasers(index)}>{item.name}</div>
               })
            }
            
         </div>
      )
   }
}

export default New

