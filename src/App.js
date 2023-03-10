import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages";
import SignInPage from "./pages/signin";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
