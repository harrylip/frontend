import React from 'react';
import {Icon,Avatar} from 'antd';
import {Link} from 'react-router-dom'
var Button2Css = require('./button2.css')
export default class Button2 extends React.Component{
    render(){
        return(
            <div className={Button2Css.main}>
                <div className={Button2Css.zh}>
                <br/>
                <br/>
                <Avatar className={Button2Css.Ava} icon="check" size={160}></Avatar>
                <p className={Button2Css.di}>订单已确定</p>
                <Link to="/homepage"><button className={Button2Css.bu}>返回主页</button></Link>
                </div>
            </div>
        )
    }
}