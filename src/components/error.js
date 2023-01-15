import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex-col flex h-[100vh] justify-center items-center">
      <div className="text-[7rem] font-bold text-red-400 tracking-wider">
        Invalid ?
      </div>
      <hr className="border-2 w-full border-red-300" />
      <div className="flex text-[5rem] text-black font-bold tracking-wide">
        Github
        <div className="ml-6 text-black text-opacity-30">Username</div>
      </div>
      <Link
        to="/"
        className="cursor-pointer bg-gradient-to-r to-red-500 from-red-400 p-3 text-white shadow-md rounded-[0.2rem] hover:scale-105 transform transition-all duration-300 ease-in-out focus:scale-95 focus:delay-800 mt-[5rem] font-bold tracking-wider"
      >
        Home
      </Link>
    </div>
  );
}
