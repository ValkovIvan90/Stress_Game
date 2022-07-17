import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from "./components/Home";

function App() {
  return (
    <Container className="m-0 p-0 min-vw-100 overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  )
}

export default App;