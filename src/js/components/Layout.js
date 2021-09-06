import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../views/Home";
import DetailsChars from "../views/DetailsChar";
import DetailsPlanet from "../views/DetailsPlanet";
import DetailsVehic from "../views/DetailsVehic";
import Navbar from "./Navbar";


const Layout = () => {
    return <Router>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/detailchar/:id" component={DetailsChars}>
                    <DetailsChars />
                </Route>
                <Route path="/detailplanet/:id" component={DetailsPlanet}>
                    <DetailsPlanet />
                </Route>
                <Route path="/detailvehic/:id" component={DetailsVehic}>
                    <DetailsVehic />
                </Route>
                <Route render={() => <h1>Not found</h1>}></Route>
            </Switch>
        </div>

    </Router>
}
export default Layout;