import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homepage';
import Footer from './Footer/footer';
import FunBu from './FunBu/button'
import Button2 from './Button2/button2'
import Person from './Person/person'
import Login0 from './Login0/login0'
import Order from './Order/order'
import Register from './Register/register'
import Opinion from './Opinion/opinion'
import Contribute from './Contribute/contribute'
import Intro from './Intro/intro'
import Guan from './Guan/guan'
import Forget from './Forget/forget'
import Information from './Information/information'
import Action from './Action/action'
import Class from './Class/class'
import Store from './Store/store'
import {BrowserRouter,Route, Switch,Redirect,withRouter} from 'react-router-dom';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter >
                    <Switch>
                        <Route path="/" exact component={Login0}></Route>
                        <Route path="/homepage" component={HomePage}></Route>
                        <Route path="/button" component={FunBu}></Route>
                        <Route path="/button2" component={Button2}></Route>
                        <Route path="/footer" component={Footer}></Route>
                        <Route path="/login0" component={Login0}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route path="/order" component={Order}></Route>
                        <Route path="/person" component={Person}></Route>
                        <Route path="/contribute" component={Contribute}></Route>
                        <Route path="/opinion" component={Opinion}></Route>
                        <Route path="/intro" component={Intro}></Route>
                        <Route path="/guan" component={Guan}></Route>
                        <Route path="/forget" component={Forget}></Route>
                        <Route path="/information" component={Information}></Route>
                        <Route path="/action" component={Action}></Route>
                        <Route path="/class" component={Class}></Route>
                        <Route path="/store" component={Store}></Route>
                        <Redirect to="login0"></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));
export default withRouter
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
