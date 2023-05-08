import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {
  const server = "https://testone-em6f.onrender.com";
  // const server = "http://localhost:2323";

  const handle1 = async (e) => {
    e.preventDefault();
    try {
      // const data = await axios.get(`${server}`, {
      //   withCredentials: true
      // });
      // console.log("handler1: ", data);
      window.open(`${server}`, "_self");
    } catch (error) {
      console.log("error handler1: ", error);
    }
  }

  const handle2 = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get(`${server}/check`, {
        withCredentials: true
      });
      console.log("handler2: ", data);
    } catch (error) {
      console.log("error handler2: ", error);
    }
  }

  const handle3 = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get(`${server}/logout`, {
        withCredentials: true
      });
      console.log("handler3: ", data);
    } catch (error) {
      console.log("error handler3: ", error);
    }
  }

  return (
    <div className="App">
      <button onClick={handle1}>cookie</button>
      <button onClick={handle2}>check</button>
      <button onClick={handle3}>logout</button>
    </div>
  );
}

export default App;
