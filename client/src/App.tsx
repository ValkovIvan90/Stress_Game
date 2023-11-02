import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import './App.css';
import { UserProvider } from "./context/UserDataContext";

import Dare from "./pages/Dare";
import Home from "./pages/Home";
import Game from "./components/Game/GameStart";
import { useKeycloak } from "@react-keycloak/web";

function App() {
  const { keycloak, initialized } = useKeycloak();

  console.log(keycloak);

  return (
    <>
      {initialized && (
        <UserProvider>
          <Container className="m-0 p-0 min-vw-100">
            <Routes>
              <Route path="/" element={<Dare />} />
              <Route path="/home" element={<Home />} />
              <Route path="/game" element={<Game />} />
            </Routes>
          </Container>
        </UserProvider>
      )}
    </>

  )
}

export default App;