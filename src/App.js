import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Template from "./Template";
import altonTheme from "typography-theme-alton";
import deYoungTheme from "typography-theme-de-young";
import doelgerTheme from "typography-theme-doelger";
import elkGlenTheme from "typography-theme-elk-glen";
import fairyGatesTheme from "typography-theme-fairy-gates";
import funstonTheme from "typography-theme-funston";
import grandViewTheme from "typography-theme-grand-view";
import irvingTheme from "typography-theme-irving";
import judahTheme from "typography-theme-judah";
import lawtonTheme from "typography-theme-lawton";
import lincolnTheme from "typography-theme-lincoln";
import kirkhamTheme from "typography-theme-kirkham";
import moragaTheme from "typography-theme-moraga";
import noriegaTheme from "typography-theme-noriega";
import oceanBeachTheme from "typography-theme-ocean-beach";
import parnassusTheme from "typography-theme-parnassus";
import stAnnesTheme from "typography-theme-st-annes";
import stowLakeTheme from "typography-theme-stow-lake";
import sutroTheme from "typography-theme-sutro";
import sternGroveTheme from "typography-theme-stern-grove";
import twinPeaksTheme from "typography-theme-twin-peaks";
import wordpressKubrickTheme from "typography-theme-wordpress-kubrick";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.themes = [
      altonTheme,
      deYoungTheme,
      doelgerTheme,
      elkGlenTheme,
      fairyGatesTheme,
      funstonTheme,
      grandViewTheme,
      irvingTheme,
      judahTheme,
      lawtonTheme,
      lincolnTheme,
      kirkhamTheme,
      moragaTheme,
      noriegaTheme,
      oceanBeachTheme,
      parnassusTheme,
      stAnnesTheme,
      stowLakeTheme,
      sutroTheme,
      sternGroveTheme,
      twinPeaksTheme,
      wordpressKubrickTheme
    ];
  }

  slug(title) {
    return title
      .split(" ")
      .map(word => word.toLowerCase())
      .join("-");
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            {this.themes.map(theme => (
              <div
                style={{ width: "33%", display: "inline-block" }}
                key={theme.title}
              >
                <Link to={`/${this.slug(theme.title)}`}>
                  <div>{theme.title}</div>
                </Link>
              </div>
            ))}
            {this.themes.map(theme => (
              <div key={theme.title}>
                <Route
                  exact
                  path={`/${this.slug(theme.title)}`}
                  render={() => <Template theme={theme} />}
                />
              </div>
            ))}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
