import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Landing } from "./pages/Landing/Landing";
import { EditClients } from "./pages/EditClients/EditClients";
import { EditText } from "./pages/EditText/EditText";
import { SendText } from "./pages/SendText/SendText";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    weightLossGoals: "",
    daysElapsed: "",
    spendTotal: "",
  };
  const [loggedIn, setLoggedIn] = useState(true);
  // selected client for client edit
  const [selected, setSelected] = useState(initialState);
  // selected text for text edit
  const [selectedText, setSelectedText] = useState();
  // selected clients for message send
  const [selectedGroup, setSelectedGroup] = useState([]);
  const [clients, setClients] = useState();
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    getClients();
    getTexts();
  }, []);

  const getClients = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/clients");
      const clients = await response.json();
      setClients(clients);
      setSelected(clients[0]);
      setSelectedGroup([clients[0], clients[1]]);
    } catch (err) {
      console.log(err);
    }
  };
  const getTexts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/messages");
      const textResponseJSON = await response.json();
      setTexts(textResponseJSON);
      setSelectedText(texts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  if (loggedIn) {
    return (
      <div className="App flex flex-col justify-center items-center">
        {loggedIn ? <Header /> : null}
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/send"
              element={
                <SendText
                  clients={clients}
                  selectedGroup={selectedGroup}
                  setSelectedGroup={setSelectedGroup}
                />
              }
            />
            <Route
              path="/clients"
              element={
                <EditClients
                  clients={clients}
                  selected={selected}
                  setSelected={setSelected}
                  initialState={initialState}
                />
              }
            />
            <Route
              path="/edittext"
              element={
                <EditText
                  texts={texts}
                  selectedText={selectedText}
                  setSelectedText={setSelectedText}
                />
              }
            />
          </Routes>
        </Router>
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
