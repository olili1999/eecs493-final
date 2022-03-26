import logo from './logo.svg';
import './App.css';

import Activity from "./components/Activity.js"


function App() {
  return (
    <div id = "app"> 
      <h1 class="text-5xl font-normal leading-normal text-blueGray-800 m-10">
        Meet and Greet @ the University of Michigan
      </h1>

      <Activity></Activity>
   
      <p class = "text-lg m-10"> 
        A website to meet people and do cool stuff at U of M right now!
      </p>
      <button className="ml-10 bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-16 py-6 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        Add an activity
      </button>

      <div class="ml-2 mr-2 mt-20 grid grid-cols-4 justify-items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>


      </div>
    </div> 
  );
}

export default App;
