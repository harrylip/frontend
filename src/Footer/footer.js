import React from 'react';
import {Link} from 'react-router-dom'

var FooterCss = require('./footer.css')
export default class Footer extends React.Component{
    render(){
        return(
            <div className={FooterCss.main}>
                <div className={FooterCss.button}>
                    <div className={FooterCss.bu01}>
                        <Link to="/function"><button className={FooterCss.bu1}>快递</button></Link>
                    </div>
                    <div className={FooterCss.bu01}>
                        <Link to="/function"><button className={FooterCss.bu2}>饮料</button></Link>
                    </div>
                    <div className={FooterCss.bu01}>
                        <Link to="/function"><button className={FooterCss.bu3}>水果</button></Link>
                    </div>
                    <div className={FooterCss.bu01}>
                        <Link to="/function"><button className={FooterCss.bu4}>代缴水电</button></Link>
                    </div>
                </div>
                <div className={FooterCss.bottom}>
                    <div className={FooterCss.bo}>
                        注：支付请向镖师支付
                    </div>
                </div>
            </div>
        )
    }
}