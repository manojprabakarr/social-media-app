import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import Header from "./components/layout/Header";
import Register from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Register />
      </Container>
    </div>
  );
}

export default App;
