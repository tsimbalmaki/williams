import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Whatwedo from "./components/Whatwedo/Whatwedo";
import Whoweare from "./components/Whoweare/Whoweare";
import Patentingprocess from "./components/Patentingprocess/Patentingprocess";
import Faq from "./components/FAQ/Faq";
import Feestructure from "./components/Feestructure/Feestructure";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <Switch>
                    <Route path='/whoweare' component={Whoweare}/>
                    <Route path='/whatwedo' component={Whatwedo}/>
                    <Route path='/patentingprocess' component={Patentingprocess}/>
                    <Route path='/faq' component={Faq}/>
                    <Route path='/feestructure' component={Feestructure}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/blog' component={Blog}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
