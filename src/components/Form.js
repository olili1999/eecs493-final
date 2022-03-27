const Form = ({setFormData, setOpacity, setShow, setDisable})=>{


    const handleSubmit = (e) => {

        // get data
        setFormData([e.target[0].value, e.target[1].value, 
                     e.target[2].value, e.target[3].value, e.target[4].value]);
        // set rest of screen back to normal
        setOpacity(1); 
        // get rid of popup
        setShow(false); 
        // allow users to click add an activity again
        setDisable(false); 
    };

    // function handleSubmit(event){ 
    //     // setFormData(event.target[0].value);         
    // }

    return (
    <form onSubmit = {handleSubmit} className = "w-96 h-96 fixed z-1 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 border-solid border-2 `border-sky-900 rounded-lg bg-white">
        <h1 className = "text-center text-2xl font-normal leading-normal text-blueGray-800"> 
        Add an activity
        </h1>
        <div className ="flex ml-1 mt-3 space-y-9 justify-center flex-col"> 
            <div className = "flex"> 
                <p>Activity Name:</p> 
                <input className = "ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="activity_name"/>
            </div> 
            <div className = "flex"> 
                <p>Location Name:</p> 
                <input className = "ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
            </div> 
            <div className = "flex"> 
                <p>Description:</p> 
                <input className = "ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
            </div> 
            <div className = "flex"> 
                <p># of people needed: </p> 
                <input className = "ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
            </div> 
            <div className = "flex"> 
                <p>Phone Number: </p> 
                <input className = "ml-1 border-solid border-2 border-sky-900 rounded-md" type="text" id="name"/>
            </div> 
            
        </div> 
        <input className = "mt-2 h-8 cursor-pointer bg-sky-900 absolute bottom-0 w-full text-white rounded-bl-md rounded-br-md" type="submit" value="Submit" />
    </form>

    )

}; 

export default Form; 

