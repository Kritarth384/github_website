import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProfileData from "./components/ProfileData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<ProfileData />}></Route>
      </Routes>
    </>
  );
}

export default App;
