import React from 'react';

var IntroCss = require('./intro.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={IntroCss.main}>
                <div className={IntroCss.top}>
                        <img className={IntroCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={IntroCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={IntroCss.mid}> 联系我们</div>
                <br></br>
                <div className={IntroCss.title}>
                    <p>公司名称：名都工作室</p>
                    <p>公司电话：13408635747</p>
                    <p>公司邮箱：3121630091@qq.com</p>
                </div>
            </div>
        )
    }
}