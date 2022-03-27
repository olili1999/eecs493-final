import logo from './logo.svg';
import './App.css';

import BlockMLogo from './blockm.png';


import Activity from "./components/Activity.js"
import Form from "./components/Form.js"

import React, {useState} from 'react'; 



function App() {

  const [show, setShow] = useState(false);


  const [opac, setOpacity] = useState(1); 
  const [opacPopup, setOpacPopup] = useState(1); 


  function handleOpacityChange(){ 
    setOpacity(0.3); 
    setOpacPopup(1); 
  }


  function handleClickChanges(){
    setShow(!show); 
    handleOpacityChange(); 
  }


  

  return (
    <div id = "app">
      
      <div style = {{opacity: opac}}> 
        <div className = "bg-sky-900 flex justify-center space"> 
          <div class = "ml-6 w-28 flex items-center"> 
            <img class = "object-cover" src = {BlockMLogo}/>
          </div> 
          <h1 className="text-5xl font-normal leading-normal text-blueGray-800 m-10 text-yellow-400 text-center">
            Meet and Greet @ the University of Michigan
          </h1>   
        </div> 
        <h2 className = "text-3xl m-10 text-center"> 
          A website to meet people and do cool stuff at U of M right now!
        </h2>


        <div className = "mt-5 ml-5 mr-5 flex justify-between flex-wrap"> 
          <Activity></Activity>
          <Activity></Activity>
          <Activity></Activity>
          <Activity></Activity>
          <Activity></Activity>
          <Activity></Activity>
        </div> 
        
        <div className = "flex justify-center mt-10"> 
          <button onClick = {handleClickChanges} className="bg-sky-900 text-white active:bg-sky-700 font-bold uppercase text-sm px-16 py-6 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-yellow-400" type="button">
            Add an activity
          </button>
        </div> 

      </div>
      {show ? <Form style = {{opacity: opacPopup}}> </Form> : null} 
 
    </div> 
  );
}

export default App;
