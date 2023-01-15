import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import location from "../assets/location.svg";
import linkImage from "../assets/link.svg";

export default function Profile({ data }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  return (
    <div className="h-[30vh] w-full flex p-[8rem] items-center flex-auto justify-center shadow-2xl">
      <div className="mr-[6rem]">
        <a href={userData.url} target="_blank" rel="noreferrer">
          <img
            src={userData.avatar}
            alt="profile pic"
            className="rounded-full w-[14 rem] h-[14rem] shadow-lg drop-shadow-2xl transition-all hover:scale-110 cursor-pointer ease-in-out border-[1rem] border-red-400 flex justify-center items-center flex-auto"
          />
        </a>
      </div>
      <div className="flex flex-col">
        <div className="text-[3rem] font-bold tracking-wide text-red-400 flex">
          {userData.name}
          <a href={userData.url} target="_blank" rel="noreferrer">
            <img src={linkImage} alt="link" className="h-6, w-6 ml-3" />
          </a>
        </div>
        <div className="tracking-widest text-[1rem] text-red-300 font-bold mb-3">
          {userData.bio}
        </div>

        {userData.location && (
          <div className="mb-3 flex items-center">
            <img src={location} alt="location" className="h-6 w-6 mr-3" />
            <label className=" text-sky-400 tracking-widest uppercase">
              {userData.location}
            </label>
          </div>
        )}
        {userData.twitter && (
          <div className="flex items-center">
            <div className="mr-3 tracking-wider text-red-400 text-[1.2rem] font-bold">
              Twitter:{" "}
            </div>
            <a
              href={"https://twitter.com/" + userData.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className="tracking-widest text-sky-400 hover:scale-105 transition-all duration-400">
                {" "}
                {userData.twitter && userData.twitter}
              </div>{" "}
            </a>
          </div>
        )}
        {userData.blog && (
          <div className="flex items-center">
            <div className="mr-3 tracking-wider text-red-400 text-[1.2rem] font-bold">
              Blog:{" "}
            </div>
            <a href={userData.blog} target="_blank" rel="noreferrer">
              <div className="tracking-widest text-sky-400 hover:scale-105 transition-all duration-400">
                {" "}
                {userData.blog && userData.blog}
              </div>{" "}
            </a>
          </div>
        )}

        {userData.company && (
          <div className="flex items-center">
            <div className="mr-3 tracking-wider text-red-400 text-[1.2rem] font-bold">
              Company:{" "}
            </div>
            <div className="tracking-widest text-sky-400 hover:scale-105 transition-all duration-400 cursor-pointer">
              {" "}
              {userData.company && userData.company}
            </div>{" "}
          </div>
        )}
        {userData.email && (
          <div className="flex items-center">
            <div className="mr-3 tracking-wider text-red-400 text-[1.2rem] font-bold">
              Twitter:{" "}
            </div>
            <a href={userData.email} target="_blank" rel="noreferrer">
              <div className="tracking-widest text-sky-400 hover:scale-105 transition-all duration-400">
                {" "}
                {userData.email && userData.email}
              </div>{" "}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
