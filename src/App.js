import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen';
import ProfileScreen from './ProfileScreen';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './Login';
function App() {
  //step 50
  const user = useSelector(selectUser); //step 86 gives user back
  
  //step 83
  //step 84 go to down
  const dispatch = useDispatch();

  //step 76

  useEffect(()=>{
  const unsubscibe=  onAuthStateChanged(auth , (user) => {
      if(user){
        //logged in
      //  console.log(userAuth);
        //step 85

        dispatch(
          login({
          uid: user.uid,
          email: user.email,
  
        }))
      }else{
        //logged out
        //step 84
        dispatch(logout());


      }
    })
    return unsubscibe;
    //77 got to store.js
  }, [dispatch]);

  return (
    <div className="App">

      {/*step 1 */}
      <Router>              {/*step 50 // step 51 login file */}
        { !user ? (
    <Login/>
        ):(
        
/*<Homescreen/> crate home screen folder */
    /*47 */
  <Routes>  
    {/*step 86                          step 87 create profile screen file*/}
    <Route path='/profile' Component={ProfileScreen}/>
      <Route path="/" exact Component={Homescreen} />{/*48  after this step // step 49 go homescreen css*/} 
  </Routes>
      
        )};
      </Router>    
    </div>
  );
}

export default App;
