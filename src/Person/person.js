import React from 'react'
import {Row,Upload, Icon, message } from 'antd'
import {Link} from 'react-router-dom'
var PersonCss =require('./person.css')  

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
export default class person extends React.Component{
    
    state = {
        loading: false,
      };
    
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };
    render(){
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
          const { imageUrl } = this.state;
        return(
            <div className={PersonCss.background}>
                <div className={PersonCss.di}>
                    <div className={PersonCss.top}>
                      <Icon type="user"/>Personal Page<Link to="/homepage"><Icon type="home" className={PersonCss.icon}></Icon></Link>
                    </div>
                    <div className={PersonCss.dan}>
                    <Row className={PersonCss.secend} type="flex" justify="space-around" align="middle">
                        <Link to="/order"><button className={PersonCss.button}>订单详情</button></Link>
                    </Row>
                    <Row className={PersonCss.third} type="flex" justify="space-around" align="middle">
                        <Link to="/opinion"><button className={PersonCss.button}>反馈建议</button></Link>
                    </Row>
                    <Row className={PersonCss.third} type="flex" justify="space-around" align="middle">
                        <Link to="/contribute"><button className={PersonCss.button}>捐赠</button></Link>
                    </Row>
                    </div>
                </div>
           </div>
        )
    }
}