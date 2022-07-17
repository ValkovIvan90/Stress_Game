import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import './App.css';

import Dare from "./pages/Dare";
import Home from "./pages/Home";


function App() {
  return (
    <Container className="m-0 p-0 min-vw-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<Dare />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App;