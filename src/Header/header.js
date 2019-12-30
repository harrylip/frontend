import React from 'react';
import {Link} from 'react-router-dom'
import {Avatar,Carousel} from 'antd'
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
                <div className={HeaderCss.top}>
                    <img className={HeaderCss.top2} src="logo3.png" width="210px" height="100px"></img>
                    <Link to="/guan" className={HeaderCss.bu1}>关于景轩</Link>
                    <Link to="/intro" className={HeaderCss.bu1}>联系我们</Link>
                    <div className={HeaderCss.user}>
                        <Avatar icon="user" size={70}></Avatar>
                        {userProfile}
                    </div>
                </div>
            </div>
        )
    }
}