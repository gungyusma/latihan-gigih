import React from "react";
import Trending from "./util/Trending";
import Search from "./pages/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../src/css/home.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/App">
                    <Search />
                </Route>
                <Route path="/Trending">
                   <Trending />
                </Route>
                <Route path="/">
                    <div className="homewrapper">
                        <h1>Welcome to our homepage</h1>
                        <Link to="/App" className="homepil">Search Giphy</Link><br></br>
                        <Link to="/Trending" className="homepil">See what`s trending!</Link>
                    </div>

                </Route>
            </Switch>
        </Router>
    )
}

export default App;