import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
var ContributeCss =require('./contribute.css')

export default class Contribute extends React.Component{
    
    render(){
        return(
            <div className={ContributeCss.main}> 
                <div className={ContributeCss.top}><Icon type="gift"/>Contribute<Link to="/homepage"><Icon type="home" className={ContributeCss.icon}></Icon></Link></div>
                <div className={ContributeCss.center}>
                    <img  className={ContributeCss.img1}></img>
                    <img  className={ContributeCss.img2}></img>
                </div>
                <div className={ContributeCss.bottom}>
                    <p className={ContributeCss.p}>祝您福如东海      寿比南山</p>  
                </div>
            </div>
           
        )
    }
}