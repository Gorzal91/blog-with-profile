// import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";

function App() {
  const data = ourMockData.data;

  return (
    <>
      <ProfileSummary data={data}/>
    </>
  );
}

export default App;
