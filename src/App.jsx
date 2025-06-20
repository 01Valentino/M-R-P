import { useState } from "react";
import Appie from "./components/user";
import Rejected from "./components/rejected";

const App = () => {
  const [attempt, setAttempt] = useState(0);

  return (
    <>
      <Rejected />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <Appie />
        <h2 className="text-3xl font-bold capitalize mb-5 ">
          count : {attempt}
        </h2>
        <div className="flex gap-5">
          <button
            className="bg-amber-300 text-white px-5 py-2 rounded-lg hover:cursor-pointer hover:bg-amber-500 transition-all duration-300 ease-in font-bold uppercase"
            onClick={() => setAttempt(attempt + 1)}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 text-white  px-5 py-2 rounded-lg uppercase hover:cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in font-bold"
            onClick={() => setAttempt(0)}
          >
            Reset
          </button>
          <button
            className="bg-red-500 text-white px-5 py-2 rounded-lg uppercase hover:cursor-pointer hover:bg-red-700 transition-all duration-300 ease-in font-bold"
            onClick={() => setAttempt(attempt - 1)}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
