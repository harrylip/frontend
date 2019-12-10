import React from 'react';
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
var HeaderCss = require('./header.css')

export default class Header extends React.Component{
    render(){
        let userProfile=null;
        let username = window.localStorage.getItem("username")
        if(username!=null){
            userProfile=
            <div className={HeaderCss.dl}>
                <Link to="/person">{username}</Link>
            </div>
        }else{
            userProfile=<Link to="/login0">登录</Link>
        }

        return(
            <div className={HeaderCss.main}>
                <img src="lo1.gif" width="230px" height="160px"></img>
                <div className={HeaderCss.user}>
                    <Avatar icon="user" size={110}></Avatar>
                    {userProfile}
                </div>
            </div>
        )
    }
}