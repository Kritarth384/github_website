import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Repo({ data, name }) {
  const [repoData, setRepoData] = useState([]);
  const [langData, setLangData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const hasNext = index + 10 < langData.length;
  const hasPrev = index > 0;
  console.log(hasNext, hasPrev);

  useEffect(() => {
    setRepoData(data);
    const promises = data.map((repo) =>
      fetch(`http://localhost:5000/api/lang/${name}/${repo.repo_name}`).then(
        (response) => response.json()
      )
    );
    Promise.all(promises)
      .then((results) => {
        setLangData(results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(langData);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] bg-red-50 w-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="h-[80vh] flex justify-center items-center flex-wrap bg-red-50 w-full p-[4rem] overflow-auto flex-auto px-[2rem]">
      <button
        className={`absolute left-0 ml-[2rem] ${
          !hasPrev && "hidden opacity-0"
        }} bg-white p-3 h-[5rem] text-red-400 text-[1.5rem] font-bold rounded-[0.5rem] shadow-md flex justify-center items-center hover:scale-105 duration-300 ease-in-out transition-all focus:scale-95`}
        onClick={() => hasPrev && setIndex(index - 10)}
      >
        {"<"}
      </button>

      {repoData.map((repo, ind) => {
        console.log(ind);
        if (ind >= index && ind < index + 10) {
          return (
            <a href={repo.url} target="_blank" rel="noreferrer" key={repo.id}>
              <div className="bg-white p-9 flex justify-center  w-[40rem] min-h-[15rem] mr-[2rem] flex-col shadow-md  flex-auto rounded-[0.5rem] hover:scale-125 translation-all cursor-pointer duration-300 ease-in-out mb-5">
                <div className="font-bold tracking-wide text-[1.6rem] text-red-400 ">
                  {repo.repo_name}
                </div>
                <div className="text-red-300 font-bold tracking-wider mb-6">
                  {repo.description}
                </div>
                <div className="flex justify-center items-center flex-wrap">
                  {langData[ind] &&
                    langData[ind].langData.map((lang, indII) => {
                      return (
                        <div
                          key={indII}
                          className="bg-red-400 p-2 shadow-md mr-3 rounded-[0.3rem] text-white text-opacity-80 mb-2 hover:scale-110 duration-300 ease-in-out transition-all flex-wrap"
                        >
                          {lang}
                        </div>
                      );
                    })}
                </div>
              </div>
            </a>
          );
        }
      })}
      <button
        className={`absolute right-0 mr-[2rem] ${
          !hasNext && "hidden opacity-0"
        }} bg-white p-3 h-[5rem] text-red-400 text-[1.5rem] font-bold rounded-[0.5rem] shadow-md flex justify-center items-center hover:scale-105 duration-300 ease-in-out transition-all`}
        onClick={() => {
          if (hasNext) {
            setIndex(index + 10);
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
}
