import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Examples from "./components/Examples";

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
              <CustomLink label="Examples" to="/examples" />
            </ul>
          </header>
          <div className="content">
            <Route path="/" exact={true} component={About} />
            <Route path="/examples" component={Examples} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
