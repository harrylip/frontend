import React from 'react'
import  {Popconfirm, message,Icon} from 'antd'
import {Link} from 'react-router-dom'
var OpinionCss =require('./opinion.css')

export default class Opinion extends React.Component{
    constructor(props){
        super(props);
        this.state={}
      }
    
      changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
    
      opinion = () =>{
        var data = {
          "opinion":this.state.opinion
        }
        fetch("/user/opinion",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
          if(result.state==1){
            message.info("反馈成功")
          }else if(result.state==0){
            message.info("反馈失败")
          }
        })
      }
    render(){
        
        return(
            <div className={OpinionCss.background}>
                <div className={OpinionCss.all}>
                <div className={OpinionCss.top}>
                        <img className={OpinionCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <img className={OpinionCss.top3} src="ph1.png" width="200px" height="140px"></img>
                </div>
                <div className={OpinionCss.mid}>反馈建议</div>
                <div className={OpinionCss.center}>
                    <p className={OpinionCss.p}>反馈建议</p>
                    <input className={OpinionCss.input} type="opinion" name="opinion" value={this.state.opinion} onChange={e=>this.changeValue(e)}></input>
                    <button onClick={this.opinion} className={OpinionCss.button}>提交</button>
                </div>

                </div>
            </div>
        )
    }
}
