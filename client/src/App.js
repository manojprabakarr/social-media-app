import React from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Post from "./components/pages/postdata";
import Postform from "./components/pages/postform";
import AuthRoute from "./utils/authRoute";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Container>
            <Header />

            <Route exact path="/" component={Home} />

            <AuthRoute exact path="/register" component={Register} />

            <AuthRoute exact path="/login" component={Login} />

            <Route exact path="/posts/:postId" component={Post} />

            <Route exact path="/postform" component={Postform} />
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
