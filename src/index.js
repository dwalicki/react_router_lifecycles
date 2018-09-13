import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import PostItem from './components/post_item';

// COMPONENTS

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import Life from './components/lifecycles';
import Conditional from './components/conditional';
import User from './components/user';

const App = () => {
    return(
        
        <BrowserRouter>
            <div>
            
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to="/profile">Profile</Link><br/>
                    <Link to="/lifecycles">Life</Link><br/>
                    <Link to="/conditional">Conditional</Link><br/>
                    <Link to="/user">User</Link>
                    <hr/>
                </header>

            <Switch>
                <Route path="/posts/:id" component={PostItem}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/lifecycles" component={Life}/>
                <Route path="/conditional" component={Conditional}/>
                <Route path="/user" component={User}/>
                <Route path="/" exact component={Home}/>
                <Route render={() => <h3>oops 404</h3>}/>
            </Switch>

            </div>

        </BrowserRouter>
    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);