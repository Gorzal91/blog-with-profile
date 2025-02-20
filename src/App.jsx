// import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";
import Posts from "./components/Posts";
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

function App() {
  const data = ourMockData.data;

  return (
    <>  
    <Header data={data}/>
    <ProfileSummary data={data}/>
    <Posts data={data}/>
    <TextInput data={data}/>
    <Footer data={data}/>
    </>
  );
}

export default App;
