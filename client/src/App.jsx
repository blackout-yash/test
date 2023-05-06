import logo from './logo.svg';
import './App.css';
import axios from "axios";


function App() {
  const handle1 = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get(`http://localhost:2323`, {
        withCredentials: true
      });
      console.log("handler1: ", data);
    } catch (error) {
      console.log("error handler1: ", error);
    }
  }

  const handle2 = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get(`http://localhost:2323/check`, {
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
      const data = await axios.get(`http://localhost:2323/logout`, {
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
