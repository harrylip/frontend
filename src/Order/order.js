import React from 'react'
import {Link} from 'react-router-dom'
import { Button,Icon,Tabs} from 'antd';
var OrderCss =require('./order.css') 

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class order extends React.Component{
    render(){
        return(
            <div className={OrderCss.main}>
                <div className={OrderCss.top}>
                      <Icon type="car"/>Order
                      <Link to="/homepage"><Icon type="home" className={OrderCss.icon}></Icon></Link>
                </div>
                <div>
                <div className={OrderCss.cp}>
                <Tabs className={OrderCss.tab} size="large" tabBarGutter="5" defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="2019/7/1" key="1">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶82年拉菲<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/2" key="2">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一部8848钛晶手机<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/3" key="3">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>3件小罐茶<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/4" key="4">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶法国高山泉水<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/5" key="5">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一份喜马拉雅山纯氧<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/6" key="6">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶樱桃味可口可乐<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/7" key="7">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶可口可乐<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/8" key="8">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶雪碧<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="2019/7/9" key="9">
                        <div className={OrderCss.car}>
                            <div className={OrderCss.car02}>
                                <br/>一瓶营养快线<br/>寝室4-672<br/>
                                <Link to="/button2"><Button className={OrderCss.button}>确定</Button></Link>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                </div>
                </div>
            </div>
        )
    }
}