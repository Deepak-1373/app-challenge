import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Card from "./pages/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import CardDetail from "./pages/CardDetail/CardDetail";
import CardDetailsVariable from "./pages/CardDetailsVariable";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [element, setElement] = useState(null);

  useEffect(() => {
    axios
      .get("https://mobile-app-challenge.herokuapp.com/data")
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Card datas={datas} setElement={setElement} />}
          />

          <Route
            path="/cardDetail"
            element={<CardDetail {...element} setVariables={setVariables} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
