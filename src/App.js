import React from 'react';
import './App.css';
import Navbar from "./components/views/NavBar/Navbar";
import {Route, Switch} from "react-router-dom";
import Whatwedo from "./components/pages/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/pages/WhoWeAre/WhoWeAre";
import PatentingProcess from "./components/pages/PatentingProcess/PatentingProcess";
import Faq from "./components/pages/FAQ/Faq";
import FeeStructure from "./components/pages/FeeStructure/FeeStructure";
import Contact from "./components/pages/Contact/Contact";
import Blog from "./components/pages/Blog/Blog";

function App(props) {
  return (
      <div className="app">
        <Navbar/>
        <Switch>
          <Route path='/whoweare' render={() => <WhoWeAre/>}/>
          <Route path='/whatwedo' render={() => <Whatwedo/>}/>
          <Route path='/patentingprocess' render={() => <PatentingProcess/>}/>
          <Route path='/faq' render={() => <Faq/>}/>
          <Route path='/feestructure' render={() => <FeeStructure/>}/>
          <Route path='/contact' render={() => <Contact/>}/>
          <Route path='/blog' render={() => <Blog state={props.state.blogPage}
                                                  addPost={props.addPost}/>}/>
        </Switch>
      </div>
  );
}

export default App;
