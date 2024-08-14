import React, { useEffect, useRef, useState } from 'react'
import './Test.css'
import backicon from '../../assets/back-icon.png'
import nexticon from '../../assets/next-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'


const Testmonials = () => {
  const slider=useRef();
  let tx=0
  const slideForward=()=>{
    if(tx > -50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
     
  }

  const slideBackward=()=>{
    if(tx<0){
      tx +=25;
     }
     slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='test'>
        <img className='backicon' src={backicon} alt="back" onClick={slideForward}/>
        <img className='nexticon' src={nexticon} alt="next" onClick={slideBackward}/>
        <div className="slider">
       <ul ref={slider}>
            <li>
            <div className="slide">
             <div className='userInfo'>
             <img src={user1} alt="" />
             <div>
             <h3>Emily Williams</h3>
             <span>Edusity, USA</span>
             </div>
             </div>
             <p>Choosing to pursue my degree at MyUniv was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
             </div>
            </li>
            <li>
            <div className="slide">
             <div className='userInfo'>
             <img src={user2} alt="" />
             <div>
               <h3>Emily Williams</h3>
               <span>Edusity, USA</span>
               </div>
               </div>
             <p>Choosing to pursue my degree at MyUniv was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
             </div>
            </li>
            <li>
            <div className="slide">
             <div className='userInfo'>
             <img src={user3} alt="" />
                <div>
                <div>
               <h3>Emily Williams</h3>
               <span>Edusity, USA</span>
               </div>
               </div>
               </div>
             <p>Choosing to pursue my degree at MyUniv was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
             </div>
            </li>
            <li>
            <div className="slide">
             <div className='userInfo'>
             <img src={user4} alt="" />
             <div>
               <h3>Emily Williams</h3>
               <span>Edusity, USA</span>
               </div>
               </div>
             <p>Choosing to pursue my degree at MyUniv was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations</p>
             </div>
            </li>
        </ul> 
            
        </div>
    </div>
  )
}

export default Testmonials