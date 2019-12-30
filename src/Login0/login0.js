import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
var Login0Css =require('./login0.css')

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
  

 class Login extends React.Component{
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    
    handleSubmit = e =>{
        e.preventDefault();
        this.props.form.validateFields((err,value) => {
            if(!err){
                console.log('Received value of form', value);
            }
        });
    };

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    changeValue= e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    homepage = e =>{
        if(this.state.username=='景轩'&&this.state.password=='123456'){
            alert('登录成功');
            window.localStorage.setItem("username","景轩")
            window.localStorage.setItem("token","111111")
            //跳转首页
            this.props.history.push('/homepage')
        }else{
            alert("登录失败");
        }

    }

    render(){
        const { getFieldDecorator,getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
                <div className={Login0Css.main}>
                    <div className={Login0Css.top}>
                        <img className={Login0Css.top2} src="logo.png" width="270px" height="140px"></img>
                        <Link to="/guan" className={Login0Css.bu1}>关于景轩</Link>
                        <Link to="/intro" className={Login0Css.bu1}>联系我们</Link>
                        <Link to="/register" className={Login0Css.bu1}>注册</Link>
                        <img className={Login0Css.top3} src="ph1.png" width="200px" height="140px"></img>
                    </div>
                    <div className={Login0Css.img}>
                        <div className={Login0Css.title1}>致力于打造互联网</div>
                        <div className={Login0Css.title2}>茶文化优质社区</div>
                        <img  className={Login0Css.ph2} src="ph2.png" width="360px" height="340px"></img>
                    </div>
                    <Form layout="inline" onSubmit={this.handleSubmit} className={Login0Css.form}>
                        登录
                        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''} className={Login0Css.item}>
                        {getFieldDecorator('username', {rules: [{ required: true, message: '请输入用户名' }],})(
                            <Input name="username"id="username" className={Login0Css.input} value={this.state.username} onChange={this.changeValue} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}placeholder="Username"/>, )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''} className={Login0Css.item}>
                        {getFieldDecorator('password', { rules: [{ required: true, message: '请输入密码!' }], })(
                            <Input name="password"id="password" className={Login0Css.input} value={this.state.password} onChange={this.changeValue} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"placeholder="Password"/>, )}
                        </Form.Item>
                        <Form.Item className={Login0Css.item}>
                        {getFieldDecorator('remember', {valuePropName: 'checked', initialValue: true,})(<Checkbox>记住密码</Checkbox>)}
                        <Link to="/forget">忘记密码</Link> Or <Link to="/register">注册</Link>
                        </Form.Item>
                        <Form.Item className={Login0Css.item}> 
                                <Button onClick={this.homepage} value="登录" type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} className={Login0Css.button}>
                                   登录
                                </Button>
                        </Form.Item>
                    </Form>
                </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'horizontal_login' })(Login);
export default WrappedNormalLoginForm