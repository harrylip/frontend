import React from 'react';

var InformationCss = require('./information.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <p className={InformationCss.top}>——》每日推荐《——</p>
                <div className={InformationCss.bo1}></div>
                <div className={InformationCss.bo2}></div>
            </div>
        )
    }
}