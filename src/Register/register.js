import React from 'react'
import {Link} from 'react-router-dom'
import {  Form, Input, Tooltip,   Icon,     Select,   Checkbox,  Button, AutoComplete,Popconfirm, message
  } from 'antd';
var RegisterCss =require('./register.css')
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

var RegisterCss =require('./register.css')
    function confirm(e) {
        console.log(e);
        message.success('注册成功！');
    }
    
    function cancel(e) {
        console.log(e);
        message.error('注册失败!');
    }


 class Register extends React.Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
      };
      

      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    
      compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('您输入的两次密码不一致!');
        } else {
          callback();
        }
      };
    
      validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
          this.props.history.push('/homepage')
        }
        callback();
      };
    
      handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
      };
    
    render(){
        const { getFieldDecorator ,getFieldsError} = this.props.form;
        const { autoCompleteResult } = this.state;
    
        const formItemLayout = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        };
    
        const websiteOptions = autoCompleteResult.map(website => (
          <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
    
        return(
            <div className={RegisterCss.background}>
                <div  className={RegisterCss.kuang}>
                <img className={RegisterCss.logo} src="logo2.png" width="250px" height="110px"></img>
                <Form {...formItemLayout} onSubmit={this.handleSubmit} className={RegisterCss.form}>
                        <Form.Item
                        label={
                            <span>
                              用户名&nbsp;
                            </span>}
                        >
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请填写您的用户名!', whitespace: true }],
                        })(<Input style={{ height: '40px' }}/>)}
                        </Form.Item>
                        <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                            {
                                required: true,
                                message: '请输入您的密码!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                            ],
                        })(<Input.Password  style={{ height: '40px' }} />)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                            {
                                required: true,
                                message: '请确认您的密码!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                            ],
                        })(<Input.Password style={{ height: '40px' }} onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item label="电话">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '请输入您的电话号码!' }],
                        })(<Input  style={{ height: '40px' }} />)}
                        </Form.Item> 
                        <Form.Item> 
                                <Button onClick={this.homepage} value="登录" type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} className={RegisterCss.button}>
                                   注册
                                </Button>
                        </Form.Item>
                </Form> 
                </div>
            </div>
        )
    }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);
export default WrappedRegistrationForm