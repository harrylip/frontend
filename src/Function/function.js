import React from 'react';
import {Link} from 'react-router-dom'
import { Form,Icon,Input, Button, Checkbox } from 'antd';
var FunctionCss = require('./function.css')
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Function extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };

      render() {
            const { getFieldDecorator,getFieldsError} = this.props.form;
            return (
            <div className={FunctionCss.main}>
              <div className={FunctionCss.top}><Icon type="shopping"/>Shopping</div>
              <div className={FunctionCss.ku}>
              <Form onSubmit={this.handleSubmit} className={FunctionCss.form}>
                <Form.Item>
                <Form.Item style={{height: 70}}>
                  {getFieldDecorator('商品完整名称', {
                    rules: [{ required: true, message: '请填写详细商品名称!' }],
                  })(
                    <Input className={FunctionCss.in}
                      prefix={<Icon type="shopping" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="商品完整名称"
                    />,
                  )}  
                </Form.Item>
                </Form.Item>
                <Form.Item>
                <Form.Item style={{height: 70}}>
                  {getFieldDecorator('详细地址', {
                    rules: [{ required: true, message: '请填写详细地址!' }],
                  })(
                    <Input className={FunctionCss.in}
                      prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="详细地址"
                      placeholder="详细地址"
                    />,
                  )}
                </Form.Item>
                </Form.Item>
                <Form.Item>
                <Form.Item style={{height: 70}}>
                  {getFieldDecorator('立即送货请填1，支持预定，预定请写明时间，便于我们提前安排时间称', {
                    rules: [{ required: true, message: '请填写详细时间!' }],
                  })(
                    <Input className={FunctionCss.in}
                      prefix={<Icon type="history" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="立即送货请填1，支持预定，预定请写明时间，便于我们提前安排时间"
                      placeholder="立即送货请填1，支持预定，预定请写明时间，便于我们提前安排时间"
                    />,
                  )}  
                </Form.Item>
                  <Link to="/button">
                    <Button type="primary" htmlType="submit"  disabled={hasErrors(getFieldsError())} className={FunctionCss.button}>
                    确定
                    </Button>
                  </Link>
                </Form.Item>

              </Form>
              </div>
            </div>
            );
          }
        }
        
        const WrappedNormalLoginForm = Form.create({ name: 'function' })(Function);
        
        export default WrappedNormalLoginForm

