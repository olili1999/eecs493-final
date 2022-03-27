export default function Activity(){
    return (
        <div className = "w-96 m-2 border-solid border-2 border-sky-900 rounded-lg"> 
            <div className = "w-full rounded-tl-md rounded-tr-md bg-sky-900 text-yellow-400"> 
                <h4 className = "text-center text-2xl mb-2">Activity Name: Tennis </h4>
            </div> 
            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold"> Location Name: </p> 
                <p className = "ml-1 mt-0 text-md"> Palmer Field </p> 
            </div> 


            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold">Description: </p> 
                <p className = "ml-1 mt-0 text-md"> Looking for challengers to play us in doubles</p> 
            </div> 

            <div className = "ml-2 flex justify-items"> 
                <p className = "ml-2 mt-0 text-md font-semibold">2/4</p> 
                <p className = "ml-1 mt-0 text-md">  people are available</p> 
            </div> 
        </div>

    )

}