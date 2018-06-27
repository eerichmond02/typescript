import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Classes from "./components/Classes";
import Examples from "./components/Examples";
import ReactTypeScript from "./components/ReactTypeScript";
import Types from "./components/Types";

interface LinkParams {
  label: string;
  to: string;
  exact?: boolean;
}

const CustomLink = ({ label, to, exact }: LinkParams) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => (
      <li className={match ? "active navItem" : "navItem"}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

class App extends React.Component {

  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">TypeScript</h1>
            <ul className="nav">
              <CustomLink label="About" to="/" exact={true}/>
              <CustomLink label="Types" to="/types" />
              <CustomLink label="Classes & Interfaces" to="/classes" />
              <CustomLink label="Examples" to="/examples" />
            </ul>
          </header>
          <div className="content">
            <Route path="/" exact={true} component={About} />
            <Route path="/types" component={Types} />
            <Route path="/classes" component={Classes} />
            <Route path="/examples" component={Examples} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
