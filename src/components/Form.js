import {db} from '../firebase-config';
import {collection, addDoc, getDocs} from 'firebase/firestore';



const Form = ({setFormData, setOpacity, setShow, setDisable, setActivities})=>{

    const activitiesCollectionRef = collection(db, "activities"); 
    


    const createActivity = async(activity_name, location_name, description, num_spots, total_spots, phone_num)=>{
        // get data
       await addDoc(activitiesCollectionRef, {activity_name: activity_name, location_name: location_name, description: description, num_spots: total_spots-num_spots, total_spots: total_spots, phone_num: phone_num});
    }; 

    const getActivities = async () => {
        const data = await getDocs(activitiesCollectionRef); 
        setActivities(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })));
    }; 

    const handleSubmit = (e) => {
        const activity_name = e.target[0].value;
        const location_name = e.target[1].value;
        const description = e.target[2].value;
        const num_spots = parseInt(e.target[3].value);
        const total_spots = parseInt(e.target[4].value);
        const phone_num = parseInt(e.target[5].value);

        console.log(e.target)

        createActivity(activity_name, location_name, description, num_spots, total_spots, phone_num); 
        // setFormData([e.target[0].value, e.target[1].value, 
        //              e.target[2].value, e.target[3].value, e.target[4].value]);
        // set rest of screen back to normal
        
        getActivities(); 
        setOpacity(1); 
        // get rid of popup
        setShow(false); 
        // allow users to click add an activity again
        setDisable(false); 
    };


    const handleExit=()=> {
        setOpacity(1); 
        setShow(false); 
        setDisable(false); 
    };



    return (
    <form onSubmit = {handleSubmit} className = "w-96 h-4/5 fixed z-1 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 border-solid border-2 `border-sky-900 rounded-lg bg-white">
        <div className = "flex justify-center"> 
            <h1 className = "text-center text-2xl font-normal leading-normal text-blueGray-800"> 
            Add an activity
            </h1>
            <p onClick = {handleExit} className = "cursor-pointer absolute top-1 right-6 text-xl"> x </p> 
        </div> 
        <div className ="flex ml-1 mt-3 space-y-10 justify-center flex-col"> 
            <div className = "flex"> 
                <p>Activity Name:</p> 
                <input required list = "activity_id" className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="activity_name"/>
                <datalist id="activity_id">
                    <option value="Tennis"> </option> 
                    <option value="Spikeball"></option> 
                    <option value="Hammocking"></option>
                    <option value="Volleyball"></option>
                    <option value="Basketball"></option>
                    <option value="Meeting someone new"></option>
                    <option value="Frisbee"></option>
                </datalist> 
            </div> 
            <div className = "flex dropdown"> 
                <p>Location Name:</p> 
                <input required list = "location_id" className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
                <datalist id="location_id">
                    <option value="Palmer Field"> </option> 
                    <option value="Burns Park"></option> 
                    <option value="The Diag"></option>
                    <option value="North Campus"></option>
                    <option value="Markley"></option>
                    <option value="East Quad"></option>
                    <option value="West Quad"></option>
                    <option value="South Quad"></option>
                    <option value="North Quad"></option>
                </datalist> 
            </div> 
            <div className = "flex"> 
                <p>Description:</p> 
                <input required className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
            </div> 
            <div className = "flex"> 
                <p className = "text-sm"># people already signed up: </p> 
                <input required list = "num_already_signed" className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="number" id="name"/>
                <datalist id="num_already_signed">
                    <option value="0"> </option> 
                    <option value="1"> </option> 
                    <option value="2"></option> 
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                    <option value="10"></option>
                    <option value="11"></option>
                    <option value="12"></option>
                    <option value="13"></option>
                    <option value="14"></option>
                    <option value="15"></option>
                    <option value="16"></option>
                    <option value="17"></option>
                    <option value="18"></option>
                    <option value="19"></option>
                    <option value="20"></option>
                </datalist> 
            </div> 
            <div className = "flex"> 
                <p>Total # Spots: </p> 
                <input required list = "total_spots_id" className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="number" id="name"/>
                <datalist id="total_spots_id">
                    <option value="0"> </option> 
                    <option value="1"> </option> 
                    <option value="2"></option> 
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                    <option value="10"></option>
                    <option value="11"></option>
                    <option value="12"></option>
                    <option value="13"></option>
                    <option value="14"></option>
                    <option value="15"></option>
                    <option value="16"></option>
                    <option value="17"></option>
                    <option value="18"></option>
                    <option value="19"></option>
                    <option value="20"></option>
                </datalist> 
            </div> 
            <div className = "flex"> 
                <p>Phone Number </p> 
                <input required className = "h-8 ml-1 border-solid border-2 border-sky-900 rounded-md" type="tel" id="name"/>
            </div> 
        </div> 
        <input required className = "mt-2 h-8 cursor-pointer bg-sky-900 absolute bottom-0 w-full text-white rounded-bl-md rounded-br-md" type="submit" value="Submit" />
    </form>

    )

}; 

export default Form; 

