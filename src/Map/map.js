import React from 'react';
import { Carousel } from 'antd';
var MapCss = require('./map.css')

export default class Map extends React.Component{
    render(){
        return(
            <div className={MapCss.main}>
                <Carousel autoplay className={MapCss.car}>
                    <div>
                        <h3><img src="c.png" className={MapCss.h3}></img></h3>
                    </div>
                    <div>
                        <h3><img src="d.png" className={MapCss.h3}></img></h3>
                    </div>
                    <div>
                        <h3><img src="e.png" className={MapCss.h3}></img></h3>
                    </div>
                    <div>
                        <h3><img src="f.png" className={MapCss.h3}></img></h3>
                    </div>
                    <div>
                        <h3><img src="g.png" className={MapCss.h3}></img></h3>
                    </div>
                    <div>
                        <h3><img src="h.png" className={MapCss.h3}></img></h3>
                    </div>
                </Carousel>
                <div className={MapCss.yu}>
                    {/* 这里是标语 */}
                    <marquee direction="left" behavior="scroll" scrollamount="10" scrolldelay="10" loop="2" width="1200" bgcolor="">
                        <font color="white" size="6.5">行尽天涯静默山水间，倾听晚风拂柳笛声残</font>
                    </marquee>
                </div>
            </div>
        )
    }
}