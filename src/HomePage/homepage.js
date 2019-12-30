import React from 'react';
import Header from './../Header/header'
import Footer from './../Footer/footer'
import Information from './../Information/information'
import { Button } from 'antd';

var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.main}>
                <Header/>
                <div className={HomePageCss.ju}>
                    <Footer/>
                    <Information/>
                </div>
            </div>
        )
    }
}