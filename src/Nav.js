//step 5
import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom';
//step 6 //step 7 import nav in homescreen
import './Nav.css';

function Nav() {
    //step 13
    const [show, handleShow] = useState(false);
//step 88
    const nav= useNavigate();

    const tranisitionNavBar=()=> {
        if(window.scrollY > 100 ){
            handleShow(true);
        }else{
            handleShow(false);
        }
    } 

    //step 14
    useEffect(()=>{
window.addEventListener("scroll", tranisitionNavBar);
return () => window.removeEventListener("scroll", tranisitionNavBar); //cleanup function
    }, [])
  return (

    //step 9  //step 10 nav.css// step 11 next nav.css// go back to nav css step 12
                        //step 15 //opacity low hight while scrolling screen 
    <div className={`Nav ${show &&  "nav_black"} `}> 
        <div className="nav-contents">
             <img
             //step 88
             onClick={()=> nav("/")}
             className='Nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img 
                            //step 88 //step 89 got to profilescreen
        onClick={() => nav("/profile")}
        className='Nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /> {/*step 16 got home screen */}
        </div>
       
    </div>
  )
}

export default Nav