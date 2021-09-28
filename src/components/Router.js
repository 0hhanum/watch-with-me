import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => {
    // switch => 한번에 하나의 Route 만 render 하도록 해서 redirect 와 겹치지 않게해줌.
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/tv" exact component={TV}></Route>
                <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
                <Route path="/search" exact component={Search}></Route>
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    )
}