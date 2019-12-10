import React from 'react';
import Header from './../Header/header'
import Footer from './../Footer/footer'
import Map from './../Map/map'

var HomePageCss = require('./homepage.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={HomePageCss.main}>
                <Header/>
                <div className={HomePageCss.ju}>
                    <Footer/>
                    <Map/>
                </div>
            </div>
        )
    }
}