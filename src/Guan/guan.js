import React from 'react';

var GuanCss = require('./guan.css')
export default class HomePage extends React.Component{
    render(){
        return(
            <div className={GuanCss.main}>
                <div className={GuanCss.top}>
                        <img className={GuanCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={GuanCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={GuanCss.mid}>欢迎来到景轩</div>
                <br></br>
                <div className={GuanCss.title}>
                    <div className={GuanCss.title2}>
                    <br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        景轩是一个集合茶文化分享、交流以及茶相关产品销售于一体的茶文化平台，旨在让用户通过景轩了解到更多的茶文化知识、购买优质的相关产品，我们致力于将景轩打造为一个优质的互联网茶文化社区。
                    </div>
                </div>
            </div>
        )
    }
}