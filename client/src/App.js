import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Landing } from "./pages/Landing/Landing";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  if (loggedIn) {
    return (
      <div className="App flex flex-col justify-center items-center">
        <Header /> <Landing />
      </div>
    );
  } else {
    return (
      <div className="App flex flex-col justify-center items-center">
        <Login />
      </div>
    );
  }
}

export default App;
