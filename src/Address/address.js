import React from 'react';
import { Form, Input, Button, message,Table,Divider, Tag } from 'antd';
var AddressCss = require('./address.css')

export default class HomePage extends React.Component{

  constructor(props){
    super(props);
    this.state={}
  }

  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  add = () =>{
    var data = {
      "username":this.state.username,
      "address":this.state.address,
      "phonenumber":this.state.phonenumber
    }
    fetch("/address/insert",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==1){
        message.info("添加成功")
      }else if(result.state==0){
        message.info("添加失败")
      }
    })
  }

  delete = () =>{
    var data = {
      "username2":this.state.username2,
      "address2":this.state.address2,
      "phonenumber2":this.state.phonenumber2
    }
    fetch("/address/delete",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then(response=>response.json())
    .then(result=>{
      if(result.state==1){
        message.info("删除成功")
      }else if(result.state==0){
        message.info("删除失败")
      }
    })
  }


  get_address = () =>{
    var data = {
      "username3":this.state.username3,
      "a_id":this.state.a_id
    }

    fetch("/address/get_address",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
    }).then(response=>response.json())
    .then(
      data=>
      console.log(data),
      document.getElementById('get').innerHTML = eval
    )
  }
  
    render(){
        return(
            <div className={AddressCss.main}>
                <div className={AddressCss.top}>
                        <img className={AddressCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={AddressCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={AddressCss.mid}>地址管理</div>
                <br></br>
                <div className={AddressCss.form}>
                    <p className={AddressCss.p} >添加新地址</p>
                    <Form.Item label="收件人">
                        <Input type="username" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  placeholder="收件人" style={{ height: '40px' ,width:'300px'}} />
                    </Form.Item>
                    <Form.Item label="地址">
                        <Input type="address" name="address" value={this.state.address} onChange={e=>this.changeValue(e)}  placeholder="地址" style={{ height: '40px' ,width:'300px'}} />
                    </Form.Item>
                    <Form.Item label="电话">
                        <Input type="phonenumber" name="phonenumber" value={this.state.phonenumber} onChange={e=>this.changeValue(e)} placeholder="电话" style={{ height: '40px' ,width:'300px'}} />
                    </Form.Item>
                    <Button className={AddressCss.bu}  onClick={this.add} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'200px',fontSize:'20px'}}>添加</Button>
                </div>
    
                <table className={AddressCss.table}>
                      <p  className={AddressCss.p}>已有地址(最多五个)</p>
                      <tr>
                        <th><Input type="a_id" name="a_id" value={this.state.a_id} onChange={e=>this.changeValue(e)}></Input></th>
                        <td onClick={this.get_address}>
                          <Button style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'70px',fontSize:'20px'}}>查询</Button>
                        </td>
                        <td id="get"></td>
                      </tr>
                      <tr>
                        <th>收件人</th>
                        <td>地址</td>
                        <td>电话</td>
                        <td>操作</td>
                      </tr>
                      <tr>
                        <th type="username2" name="username2" value={this.state.username2} onChange={e=>this.changeValue(e)}>李四</th>
                        <td type="address2" name="address2" value={this.state.address2} onChange={e=>this.changeValue(e)}>魔仙堡</td>
                        <td type="phonenumber2" name="phonenumber2" value={this.state.phonenumber2} onChange={e=>this.changeValue(e)}>1684842565</td>
                        <td>
                            <Button onClick={this.delete} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'70px',fontSize:'20px'}}>删除</Button>|
                            <Button style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'70px',fontSize:'20px'}}>修改</Button>
                        </td>
                      </tr>
                      <tr>
                        <th onClick={this.get_address} name="username3" value={this.state.username3} onChange={e=>this.changeValue(e)}>瑶瑶</th>
                        <td>东王庙</td>
                        <td>1234567</td>
                        <td>
                            <Button onClick={this.delect} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'70px',fontSize:'20px'}}>删除</Button>|
                            <Button onClick={this.delect} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'70px',fontSize:'20px'}}>修改</Button>
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                </table>
            </div>
        )
    }
}