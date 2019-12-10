import React from 'react';
import {Icon,Avatar} from 'antd';
import {Link} from 'react-router-dom'
var FunBuCss = require('./button.css')
export default class FunBu extends React.Component{
    render(){
        return(
            <div className={FunBuCss.main}>
                <div className={FunBuCss.zh}>
                <br/>
                <br/>
                <Avatar className={FunBuCss.Ava} icon="check" size={160}></Avatar>
                <p className={FunBuCss.di}>订单已接受</p>
                <Link to="/homepage"><button className={FunBuCss.bu}>返回主页</button></Link>
                </div>
            </div>
        )
    }
}