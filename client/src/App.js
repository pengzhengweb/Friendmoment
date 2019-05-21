import React, { Component } from 'react';

import {Provider} from 'react-redux';

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

import './App.css';
import store from './store';

import PrivateRoute from './common/PrivateRoute';
import Chats from './components/Chats';
import Contacts from './components/Contacts';
import Discover from './components/Discover';
import TabBar from './components/TabBar';
import Me from './components/Me';
import Moment from './components/Moment';
import Publish from './components/Publish';
import Login from './components/auth/Login';
import Register from './components/auth/Register';



 class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App"> 
            <div >
              {/* <Switch>
                <PrivateRoute exact path="/" component={TabBar} />
              </Switch> */}
              <Route exact path="/" component={Chats} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <Route exact path="/publish" component={Publish} />
              <Route exact path="/me" component={Me} />
              <Route exact path="/chats" component={Chats} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/discover" component={Discover} />
              <Route exact path="/moment" component={Moment} />
              
            </div>
            <TabBar />
          </div>
        </Router>

        
      </Provider>
    )
  }
}



export default App;

