import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Error from "./error";
import Loading from "./Loading";
import Profile from "./Profile";
import Repo from "./Repo";

function ProfileData() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [repo, setRepo] = useState([]);
  const [langData, setLangData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function profileData() {
    fetch(`${process.env.REACT_APP_IP}/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.userData);
        if (data.message) {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }
  function repoData() {
    fetch(`${process.env.REACT_APP_IP}/api/repos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRepo(data.repoData);
        setIsLoading(false);
        if (data.message) {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    profileData();
    repoData();

    return () => {
      setData([]);
      setError(null);
      setIsLoading(false);
    };
  }, []);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-red-50 w-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <Profile data={data} />
      <Repo data={repo} name={id} />
    </div>
  );
}

export default ProfileData;
