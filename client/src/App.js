import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer"
import Main from "./pages/Main";
import Saved from "./pages/Saved";




function App() {

    return (

        <>

            <Router>
                <div>

                    <Route exact path="/" component={Main} />
                    <Route exact path="/saved" component={Saved}/>
          

                    {/* <Route
                        path='/dashboard'
                        render={(props) => <Dashboard {...props} isAuthed={true} />}
                    /> */}

                </div>
            </Router>
            <Footer/>


        </>
    );

}

export default App;




