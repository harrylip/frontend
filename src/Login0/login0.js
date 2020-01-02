import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd'
var Login0Css =require('./login0.css')


  

export default class Login extends React.Component{
    

    constructor(props){
        super(props);
        this.state={}
      }
      changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      login = () =>{
        var data = {
          "username":this.state.username,
          "password":this.state.password,
        }
        fetch("/user/login",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
          if(result.state==2){
            message.info("登录成功")
            this.props.history.push('/homepage')
          }else if(result.state==1){
            message.info("登录失败")
          }
        })
      }

    

    render(){
        return(
                <div className={Login0Css.main}>
                    <div className={Login0Css.top}>
                        <img className={Login0Css.top2} src="logo.png" width="270px" height="140px"></img>
                        <Link to="/guan" className={Login0Css.bu1}>关于景轩</Link>
                        <Link to="/intro" className={Login0Css.bu1}>联系我们</Link>
                        <Link to="/register" className={Login0Css.bu1}>注册</Link>
                        <img className={Login0Css.top3} src="ph1.png" width="200px" height="140px"></img>
                    </div>
                    <div className={Login0Css.mid}>
                        <div className={Login0Css.form1}>
                            <p className={Login0Css.p}>登录</p>
                          <div className={Login0Css.form2}>
                            <Form.Item>
                                <Input type="username" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  placeholder="用户名" style={{ height: '40px' ,width:'280px'}} />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password type="password" name="password" value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="密码" style={{ height: '40px' ,width:'280px'}} />
                            </Form.Item>
                            <Button className={Login0Css.bu2} onClick={this.login} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'200px',fontSize:'20px'}}>登录</Button>
                          </div>
                        </div>
                        <div className={Login0Css.title1}>致力于打造互联网</div>
                        <div className={Login0Css.title2}>茶文化优质社区</div>
                        <img  className={Login0Css.ph2} src="ph2.png" width="360px" height="340px"></img>
                    </div>
                </div>
        )
    }
}
// const WrappedNormalLoginForm = Form.create({ name: 'horizontal_login' })(Login);
// export default WrappedNormalLoginForm