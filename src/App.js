import React from 'react';
import './App.css';
import Navbar from "./components/views/NavBar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Whatwedo from "./components/pages/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/pages/WhoWeAre/WhoWeAre";
import PatentingProcess from "./components/pages/PatentingProcess/PatentingProcess";
import Faq from "./components/pages/FAQ/Faq";
import FeeStructure from "./components/pages/FeeStructure/FeeStructure";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar/>
                <Switch>
                    <Route path='/whoweare' component={WhoWeAre}/>
                    <Route path='/whatwedo' component={Whatwedo}/>
                    <Route path='/patentingprocess' component={PatentingProcess}/>
                    <Route path='/faq' component={Faq}/>
                    <Route path='/feestructure' component={FeeStructure}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/blog' component={Blog}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
