import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
var ContributeCss =require('./contribute.css')

export default class Contribute extends React.Component{
    
    render(){
        return(
            <div className={ContributeCss.main}> 
                <div className={ContributeCss.top}>
                        <img className={ContributeCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={ContributeCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={ContributeCss.mid}>捐赠</div>
                <img className={ContributeCss.img1} src="weixin.png" width="400px" height="450px"></img>
                <img className={ContributeCss.img2} src="zhifubao.jpg" width="400px" height="450px"></img>
            </div>
           
        )
    }
}