export default function Activity(){
    return (
    <form className = "w-96 h-96 fixed z-1 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 border-solid border-2 `border-sky-900 rounded-lg bg-white">
        <h1 className = "text-center text-2xl font-normal leading-normal text-blueGray-800"> 
        Add an activity
        </h1>
        <div className ="flex ml-2 mt-3 space-y-9 justify-center flex-col"> 
            <label>
                Activity Name:
                <input type="text" name="name" />
            </label>
            <label>
                Location Name:
                <input type="text" name="name" />
            </label>
            <label>
                Description:
                <input type="text" name="name" />
            </label>
            <label>
                Number of people needed: 
                <input type="text" name="name" />
            </label>
            <label>
                Phone Number: 
                <input type="text" name="name" />
            </label>
        </div> 
        <input className = "bg-sky-900 absolute bottom-0 w-full text-white " type="submit" value="Submit" />
    </form>

    )

}

