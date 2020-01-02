import React from 'react'
import {Row,Upload, Icon, message } from 'antd'
import {Link} from 'react-router-dom'
var PersonCss =require('./person.css') 

export default class HomePage extends React.Component{
    render(){
        return(
            <div className={PersonCss.main}>
                <div className={PersonCss.top}>
                        <img className={PersonCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={PersonCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={PersonCss.mid}>个人管理</div>
                <br></br>
                <div className={PersonCss.from}> 
                    <Link to="/order"><button className={PersonCss.button}>订单详情</button></Link>
                    <Link to="/address"><button className={PersonCss.button}>地址管理</button></Link>
                    <Link to="/opinion"><button className={PersonCss.button}>反馈建议</button></Link>
                    <Link to="/contribute"><button className={PersonCss.button}>捐赠</button></Link>
                </div>
                
            </div>
        )
    }
}