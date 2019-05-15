import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import store from './store';

import PrivateRoute from './common/PrivateRoute';
import Index from './components/Index';
import Chats from './components/Chats';
import Contacts from './components/Contacts';
import Discover from './components/Discover';
import Login from './components/Login';
import Me from './components/Me';
import Moment from './components/Moment';
import Publish from './components/Publish';
import Register from './components/Register';



 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App"> 
            {/* <TabBar /> */}
            
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Index} />
              </Switch>
             
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <Route exact path="/publish" component={Publish} />
              <Route exact path="/me" component={Me} />
              <Route exact path="/chats" component={Chats} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/moment" component={Moment} />
            </div>
          </div>
        </Router>

        
      </Provider>
    )
  }
}



export default App;
