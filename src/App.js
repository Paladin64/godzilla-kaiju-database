import React, { Component } from "react";
import Home from "./components/home";
import Header from "./components/common/header";

import GodzillaListDisplay from "./components/godzilla/godzillaListPage";
import GodzillaPath from "./components/godzilla/godzillaPathname";
import godzillaList from "./lists/godzillaList";

import GodzillaCloneListDisplay from "./components/godzillaClone/godzillaCloneListPage";
import GodzillaClonePath from "./components/godzillaClone/godzillaClonePathname";
import CreateGodzillaClone from "./components/godzillaClone/createGodzillaClonePage";
import EditGodzillaClone from "./components/godzillaClone/editGodzillaClonePage";

import MechagodzillaListDisplay from "./components/mechagodzilla/mechagodzillaListPage";
import MechagodzillaPath from "./components/mechagodzilla/mechagodzillaPathname";
import mechagodzillaList from "./lists/mechagodzillaList";

import GhidorahListDisplay from "./components/ghidorah/ghidorahListPage";
import GhidorahPath from "./components/ghidorah/ghidorahPathname";
import ghidorahList from "./lists/ghidorahList";

import GiganListDisplay from "./components/gigan/giganListPage";
import giganList from "./lists/giganList";
import GiganPath from "./components/gigan/giganPathname";

import MothraListDisplay from "./components/mothra/mothraListPage";
import mothraList from "./lists/mothraList";
import MothraPath from "./components/mothra/mothraPathname";

import Footer from "./components/common/footer";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { godzillaClones: [] };
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/godzilla-list" component={GodzillaListDisplay} />
          {godzillaList.map((godzilla) => {
            return (
              <Route
                path={"/godzilla-list" + godzilla.link}
                component={GodzillaPath}
              />
            );
          })}
          <Route
            exact
            path="/godzilla-clone-list"
            component={GodzillaCloneListDisplay}
          />
          <Route
            exact
            path={"/godzilla-clone-list/:id"}
            component={GodzillaClonePath}
          />
          );
          <Route
            exact
            path="/godzilla-clone-list-create"
            component={CreateGodzillaClone}
          />
          <Route
            exact
            path="/godzilla-clone-list/edit/:id"
            component={EditGodzillaClone}
          />
          <Route
            exact
            path="/mechagodzilla-list"
            component={MechagodzillaListDisplay}
          />
          {mechagodzillaList.map((mechagodzilla) => {
            return (
              <Route
                path={"/mechagodzilla-list" + mechagodzilla.link}
                component={MechagodzillaPath}
              />
            );
          })}
          <Route exact path="/ghidorah-list" component={GhidorahListDisplay} />
          {ghidorahList.map((ghidorah) => {
            return (
              <Route
                path={"/ghidorah-list" + ghidorah.link}
                component={GhidorahPath}
              />
            );
          })}
          <Route exact path="/gigan-list" component={GiganListDisplay} />
          {giganList.map((gigan) => {
            return (
              <Route path={"/gigan-list" + gigan.link} component={GiganPath} />
            );
          })}
          <Route exact path="/mothra-list" component={MothraListDisplay} />
          {mothraList.map((mothra) => {
            return (
              <Route
                path={"/mothra-list" + mothra.link}
                component={MothraPath}
              />
            );
          })}
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
