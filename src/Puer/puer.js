import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'antd';

var PuerCss = require('./puer.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={PuerCss.main}>
                <div className={PuerCss.top}>
                        <img className={PuerCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={PuerCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <img style={{margin:'5% 0 0 12%'}} src="pr.jpg" width="35%" height="50%"  title="普洱茶"></img>
                <div className={PuerCss.p}>
                    <div className={PuerCss.p1}>云南普洱茶</div>
                    <div className={PuerCss.p2}>$120</div>
                    <Button  className={PuerCss.bu} style={{ background:'rgb(141, 182, 230)', height: '50px' ,width:'180px',fontSize:'20px'}}>购买</Button>
                </div>
            </div>
        )
    }
}