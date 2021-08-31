import React from ("react");
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
    return <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/profile">
                <Profile />
            </Route>
            <Route render={() => <h1>Not found</h1>}></Route>
        </Switch>
    </Router>
}
export default Layout;