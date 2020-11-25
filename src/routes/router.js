// import React from 'react';
// import test2 from '../pages/Test/Test2.js'
// import test from '../pages/Test/Test.js'
// import {Switch,Route} from 'react-router-dom'
//
//
// const router = () => (
//    <Switch>
//       <Route exact path='/test' component={test}/>,
//       <Route path='/test2' component={test2}/>
//    </Switch>
// )
//
// export default router;




//router.js
import Index from '../pages/news/Index'
import New from '../pages/news/New'
import NewList from '../pages/news/NewList'
import NewContent from '../pages/news/NewContent'

const routes = [
   
   {
      path:"/",
      component:Index,
      exact:true
   },
   {
      path:"/new",
      component:New,
      routes:[
         {
            path:"/new/",
            component:NewContent,
            meta:{
               title:'sd',
            }
         },
         {
            path:"/new/newList",
            component:NewList,
            meta:{
               title:'sd',
            }
         }
      ]
   },

]

export default routes