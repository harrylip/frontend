import React from 'react';
import { Input,Button } from 'antd';
var ForgetCss =require('./forget.css')
const { TextArea } = Input;
const onChange = e => {
    console.log(e);
  };

export default class HomePage extends React.Component{
    
    render(){
        return(
            <div className={ForgetCss.main}>
                <div className={ForgetCss.top}>
                    <img className={ForgetCss.top2} src="logo.png" width="270px" height="140px"></img>
                    <img className={ForgetCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={ForgetCss.mid}>忘记密码</div>
                <div className={ForgetCss.func}>
                    <Input className={ForgetCss.func2} placeholder="输入你的用户名" allowClear onChange={onChange} />
                    <Input className={ForgetCss.func2} placeholder="输入你的电话" allowClear onChange={onChange} />
                    <Button  onClick={this.homepage} className={ForgetCss.func3} value="提交" type="primary"  htmlType="submit">
                        提交
                    </Button>
                </div>
            </div>
        )
    }
}