import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox,Message, message } from 'antd';
import ColumnGroup from 'antd/lib/table/ColumnGroup';
import Axios from 'axios';
var RegisterCss =require('./register.css')

export default class Register extends React.Component{

  constructor(props){
    super(props);
    this.state={}
  }
  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  register = () =>{
    var data = {
      "username":this.state.username,
      "password":this.state.password,
      "phonenumber":this.state.phonenumber
    }
    fetch("/user/register",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==2){
        message.info("用户名已存在")
        this.props.history.push('/login0')
      }else if(result.state==1){
        message.info("注册成功")
      }
    })
  }

  render(){
    return(
      <div className={RegisterCss.background}>
            <div  className={RegisterCss.kuang}>
            <img className={RegisterCss.logo} src="logo2.png" width="250px" height="110px"></img>
            <div className={RegisterCss.form}>
                <Form.Item>
                    <Input type="username" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  placeholder="用户名" style={{ height: '40px' ,width:'300px'}} />
                </Form.Item>
                <Form.Item>
                    <Input.Password type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="密码" style={{ height: '40px' ,width:'300px'}} />
                </Form.Item>
                <Form.Item>
                    <Input  type="phonenumber" name="phonenumber" value={this.state.phonenumber} onChange={e=>this.changeValue(e)}  placeholder="电话" style={{ height: '40px' ,width:'300px'}}/>
                </Form.Item>
                <Button onClick={this.register} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'200px',fontSize:'20px'}}>注册</Button>
            </div>
            </div>
      </div>
    )
  }
}