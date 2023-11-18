import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container bg-black max-w-full h-screen overflow-hidden">
        <div className=" flex flex-col justify-center items-center mt-20 pt-10">
          <div className="flex h-10 font-bold text-8xl text-white m-2">
            {count}
          </div>
          <div className="flex pt-32 pb-10" >
            <button
              className="h-40 w-40 bg-green-500 text-white rounded-full flex items-center justify-center hover:ring-4 hover:ring-green-400 transition ease-in-out duration-300"
              onClick={() => setCount((count) => count + 1)}
            >
              <img className="h-[100px] w-[100px] filter invert object-" src= "https://o.remove.bg/downloads/8023fd7a-16da-46c7-855f-4b5eeee351fb/download-removebg-preview.png" alt="" />
            </button>
          </div>
          <button
            className="bg-white h-10 w-10 rounded-full"
            onClick={() => {
              if (window.confirm("Are you sure you want to reset the count?")) {
                setCount(0);
              }
            }}
          >
            <img
              className="h-auto w-auto p-2.5"
              src="https://img.icons8.com/?size=50&id=12491&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
