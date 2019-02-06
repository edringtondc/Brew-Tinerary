import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main";
import Saved from "./pages/Saved";
import Login from "./pages/Login";




function App() {

    return (

        <>

            <Router>
                <div>

                    <Route exact path="/" component={Main} />
                    <Route exact path="/saved" component={Saved}/>
                    <Route exact path="/Login" component={Login}/>
          

                    {/* <Route
                        path='/dashboard'
                        render={(props) => <Dashboard {...props} isAuthed={true} />}
                    /> */}

                </div>
            </Router>


        </>
    );

}

export default App;




