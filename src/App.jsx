import { useState, useEffect } from "react";
import "./App.css";
import ourMockData from "./mock/mock-data.json";

function App() {
  return (
    <>
      <div className="profile-summary">
        <div className="profile-picture">
          <img
            src={ourMockData.data.imageData.imgSrc}
            alt={ourMockData.data.imageData.alt}
          />
        </div>
        <div className="profile-description">
          <h4>User Name</h4>
          <p>Hi my name is User Name and I love sushi</p>
        </div>
      </div>
    </>
  );
}

export default App;
