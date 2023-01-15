import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="Home absolute top-0 right-0 bottom-0 left-0 -z-10 bg-gradient-to-r from-red-500 to-red-400 flex flex-col"></div>
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        <div className="flex justify-center items-center w-[35em] h-[30rem] shadow-lg bg-red-50 flex-col z-10">
          <div className="h-1/5 w-full flex flex-col justify-center items-center uppercase text-[1.2rem] font-bold tracking-wider bg-white border-t-2 border-red-400">
            <div className="text-sky-400 mt-5">Github</div>
            <div className="text-red-400 text-[1.5rem] mb-4">DISTRIBUTION</div>
          </div>
          <form
            className="h-4/5 mt-[5rem] w-[20rem] flex flex-col"
            onSubmit={() => navigate(`/${id}`)}
          >
            <label className="flex flex-col mb-[4rem]">
              <label className=" tracking-wider text-red-400 font-bold text-[1.6rem] mb-[1rem]">
                Github id :
              </label>
              <input
                type="text"
                name="name"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="outline-none h-[2.3rem] tracking-wider font-bold p-2 text-sky-400"
                placeholder="Enter your Github id"
                required
              />
            </label>
            <button className="cursor-pointer bg-gradient-to-r to-red-500 from-red-400 p-3 text-white shadow-md rounded-[0.3rem] hover:scale-105 transform transition-all duration-300 ease-in-out focus:scale-95 delay-800 font-bold tracking-wider">
              Submit
            </button>
          </form>
        </div>
      </div>
      ;
    </div>
  );
}
