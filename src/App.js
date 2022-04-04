import logo from './logo.svg';
import './App.css';

import BlockMLogo from './blockm.png';
import {db} from './firebase-config';
import {collection, getDocs} from 'firebase/firestore';

import Activity from "./components/Activity.js"
import Form from "./components/Form.js"
import React, {useState, useEffect} from 'react'; 
import { setUserProperties } from 'firebase/analytics';



function App() {
  const [totalActivitiesNow, setTotalActivitiesNow] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]); 
  const [opac, setOpacity] = useState(1); 
  const [opacPopup, setOpacPopup] = useState(1); 

  const [disable, setDisable] = useState(false); 

  const [activities, setActivities] = useState([]); 
  const [newActivity, setNewActivity] = useState("");


  const activitiesCollectionRef = collection(db, "activities"); 

  function handleOpacityChange(){ 
    setOpacity(0.3); 
    setOpacPopup(1); 
  }


  function handleClickChanges(){
    setShow(!show); 
    handleOpacityChange(); 
    setDisable(true); 
  }

  function countTotalActivities(){ 
    let count = 0; 
    activities.map((activity)=>{ 
      if(activity.num_spots > 0){ 
        count+=1; 
      }
    }); 
    setTotalActivitiesNow(count); 
  }


  useEffect(()=>{ 
    const getActivities = async () => {
      const data = await getDocs(activitiesCollectionRef); 
      setActivities(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
      var count = 0; 
      activities.map((activity) => {
        count+=1; 
      });
      setTotalActivitiesNow(count); 
    }

    getActivities(); 
  },[]);


  useEffect(()=>{ 
    countTotalActivities(); 
  }, [activities]);  





  return (
    <div id = "app">


      <div style = {{opacity: opac}}> 
        <div className = "bg-sky-900 flex justify-center space"> 
          <div className = "ml-6 w-28 flex items-center"> 
            <img className = "object-cover" src = {BlockMLogo}/>
          </div> 
          <h1 className="text-5xl font-normal leading-normal text-blueGray-800 m-10 text-yellow-400 text-center">
            Meet and Greet @ the University of Michigan
          </h1>   
        </div> 
        <h2 className = "text-3xl m-10 text-center"> 
          A website to meet people and do cool stuff at U of M right now!
        </h2>

        <div className = "mt-5 ml-5 mr-5 flex justify-center flex-wrap"> 
          {activities.map((activity) => {
              return (
                 activity.num_spots > 0 ? (<Activity activities = {activities} totalActivitiesNow = {totalActivitiesNow} setTotalActivitiesNow = {setTotalActivitiesNow} setActivities = {setActivities} id = {activity.id} activity_name = {activity.activity_name} location_name = {activity.location_name} description = {activity.description} num_spots = {activity.num_spots} total_spots = {activity.total_spots} phone_num = {activity.phone_num}>
                  </Activity>): null
              );
            })}
          {totalActivitiesNow === 0 ? (<p className = "font-light text-lg"> There are no activities now :( Please add some by clicking the "ADD AN ACTIVITY" button </p>) : null}
        </div> 
        
        <div className = "flex justify-center mt-10"> 
          <button disabled = {disable} onClick = {handleClickChanges} className="bg-sky-900 text-white active:bg-sky-700 font-bold uppercase text-sm px-16 py-6 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-yellow-400" type="button">
            Add an activity
          </button>
        </div> 

      </div>


      {formData}

      {show ? <Form setActivities = {setActivities} setShow = {setShow} setDisable = {setDisable} setOpacity = {setOpacity} setFormData = {setFormData} style = {{opacity: opacPopup}}> </Form> : null} 
 
    </div> 
  );
}

export default App;
