import React from 'react'
import  {Popconfirm, message,Icon} from 'antd'
import {Link} from 'react-router-dom'
var OpinionCss =require('./opinion.css')
    function confirm(e) {
        console.log(e);
        message.success('提交成功！');
    }
    
    function cancel(e) {
        console.log(e);
        message.error('提交失败!');
    }
    
export default class Opinion extends React.Component{

    render(){
        
        return(
            <div className={OpinionCss.background}>
                <div className={OpinionCss.all}>
                <div className={OpinionCss.top}>
                      <Icon type="tag"/>Opinion
                      <Link to="/homepage"><Icon type="home" className={OpinionCss.icon}></Icon></Link>
                </div>
                <div className={OpinionCss.center}>
                    <p className={OpinionCss.p}>反馈建议</p>
                    <input className={OpinionCss.input}type="text" placeholder=""></input>
                    <Popconfirm
                    title="是否提交"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="是"
                    cancelText="否"
                    >
                    <button className={OpinionCss.button}>提交</button>
                    </Popconfirm>
                </div>

                </div>
            </div>
        )
    }
}
