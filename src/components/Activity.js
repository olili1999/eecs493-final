import {db} from '../firebase-config';
import {collection, updateDoc, doc, getDocs} from 'firebase/firestore';

const Activity = ({setActivities, id, activity_name, location_name, description, num_spots, total_spots}) =>{
    const activitiesCollectionRef = collection(db, "activities"); 

    const getActivities = async () => {
        const data = await getDocs(activitiesCollectionRef); 
        setActivities(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    }
    
    const updateActivity = async(id, num_spots)=>{ 
        const newActivityDoc = doc(db, "activities", id); 
        const newFields = {num_spots: num_spots+1};
        await updateDoc(newActivityDoc, newFields);
        getActivities(); 
    };
    
    return (
        <div className = "w-96 m-1 border-solid border-2 border-sky-900 rounded-lg"> 
            <div className = "w-full rounded-tl-md rounded-tr-md bg-sky-900 text-yellow-400"> 
                <h4 className = "text-center text-2xl mb-2">Activity Name: {activity_name} </h4>
            </div> 
            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold"> Location Name: </p> 
                <p className = "ml-1 mt-0 text-md"> {location_name} </p> 
            </div> 
            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold">Description: </p> 
                <p className = "ml-1 mt-0 text-md"> {description}</p> 
            </div> 
            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold">{num_spots}/{total_spots}</p> 
                <p className = "ml-1 mt-0 text-md">  spots are available</p> 
            </div>
            <div className = "w-full flex justify-center"> 
                <button onClick = {()=> {updateActivity(id, num_spots)}} className="mt-5 bg-sky-900 text-white active:bg-sky-900 font-bold uppercase text-sm px-6 py-1.5 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    + Join Activity
                </button>
            </div> 
        
        </div>

    )

}

export default Activity; 