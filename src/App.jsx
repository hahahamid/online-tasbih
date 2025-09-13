import { useEffect, useState } from "react";
import "./App.css";
import clip from "./assets/audio.mp3";

function App() {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   if (count % 100 === 0 && count !== 0) {
  //     const audio = new Audio(clip);
  //     audio.play();
  //   }
  // }, [count]);

  const handleButtonClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);

    setCount((count) => count + 1);

    // Vibrate on supported devices
    if ("vibrate" in navigator) {
      navigator.vibrate(200); // Vibrate for 200 milliseconds
      console.log("vibrated");
    }
  };

  return (
    <>
      <div className="container bg-black max-w-full h-screen overflow-hidden">
        <div className=" flex flex-col justify-center items-center mt-20 pt-10">
          <div className="flex h-10 font-bold text-8xl text-white m-0 lg:m-2">
            {count}
          </div>
          <div className="flex pt-32 pb-10">
            <button
              className={`h-72 w-72 bg-green-500 text-white rounded-full flex items-center justify-center 
              ${
                isClicked
                  ? "hover:ring-4 hover:ring-green-400 transition ease-in-out duration-300 drop-shadow filter hover:drop-shadow-glow"
                  : "transition ease-out"
              }`}
              onClick={handleButtonClick}
            >
              <div className="h-[100px] w-[100px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="100"
                  height="100"
                  stroke="white"
                  opacity={0.9}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
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
