import { useState, useEffect } from "react";
//importing the apiInterface functions in our component
import { fetchAPI, storeAPI } from "./apiInterface";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // const clickHandler = () => {

  // }

  // // Fetch data when the component mounts
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchAPI("/"); // Call API to test the flask server
  //       setCount(result); // Store the fetched data in state
  //       console.log(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error); // Handle any errors
  //     }
  //   };

  //   fetchData(); // Call fetchData to initiate the GET request
  // }, []); // Empty array means this effect runs only once (on component mount)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clickHandler()}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
