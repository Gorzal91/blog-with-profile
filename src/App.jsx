// import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";
import ProfileSummary from "./components/ProfileSummary";
import Posts from "./components/Posts";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

function App() {
  const data = ourMockData.data;

  return (
    <> 
    <header> 
    <h1>{data.header}</h1>
    </header>
    <ProfileSummary data={data}/>
    <Posts data={data}/>
    <TextInput data={data}/>
    <Footer footerData={data.footer}/>
    </>
  );
}

export default App;
