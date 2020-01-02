import React from 'react';
import {Link} from 'react-router-dom'
import { Menu, Icon,Carousel,Tooltip } from 'antd';
const { SubMenu } = Menu;

var FooterCss = require('./footer.css')
export default class Footer extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            news: [{
                poster: ""
            }]
        }
    }

    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render(){

        return(
            <div className={FooterCss.main}>
                <div className={FooterCss.mid}>
               <Menu className={FooterCss.menu} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="1">
                        <Link to="/action"><Icon type="fire" />精彩活动</Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <Link to="/class">
                            <Icon type="flag" />茶的分类
                            </Link>
                        }
                        >
                        <Menu.ItemGroup title="分类">
                                <Menu.Item key="setting:1">绿茶</Menu.Item>
                                <Menu.Item key="setting:2">红茶</Menu.Item>
                                <Menu.Item key="setting:3">黑茶</Menu.Item>
                                <Menu.Item key="setting:4">花茶</Menu.Item>
                                <Menu.Item key="setting:5">乌龙茶</Menu.Item>
                                <Menu.Item key="setting:6">台湾奶茶</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        title={
                            <Link to="/Store">
                            <Icon type="shop" />店铺
                            </Link>
                        }
                        >
                        <Menu.ItemGroup title="茶">
                            <Menu.Item key="setting:1">普洱茶</Menu.Item>
                            <Menu.Item key="setting:2">铁观音</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="茶具">
                            <Menu.Item key="setting:1">功夫茶茶具一件套</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="茶点">
                        <Menu.Item key="setting:1">凤梨酥</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu
                        title={
                            <span>
                            <Icon type="picture" />
                            精美图片
                            </span>
                        }
                        >
                            <Menu.Item key="1">
                                <a href="https://unsplash.com/s/photos/tea" target="_blank" rel="noopener noreferrer">Unsplash</a>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <a href="https://pixabay.com/zh/photos/search/tea/" target="_blank" rel="noopener noreferrer">pixabay</a>
                            </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="A">
                        <Icon type="mail" />
                        AAA
                    </Menu.Item>
                    <Menu.Item key="B">
                        <Icon type="mail" />
                        BBB
                    </Menu.Item>
                    <Menu.Item key="C">
                        <Icon type="mail" />
                        CCC
                    </Menu.Item>
                    <Menu.Item key="D">
                        <Icon type="mail" />
                        DDD
                    </Menu.Item>
                </Menu> 
                </div>
                <div className={FooterCss.td}>
                    <Carousel autoplay className={FooterCss.td2}>
                    <div>
                        <h3><img src="banner1.png" width="100%" height="300px"></img></h3>
                    </div>
                    <div>
                        <h3><img src="banner2.png" width="100%" height="300px"></img></h3>
                    </div>
                    <div>
                        <h3><img src="banner3.png" width="100%" height="300px"></img></h3>
                    </div>
                    </Carousel>
                    <div className={FooterCss.td3}>欢迎来到景轩<br/></div>
                </div>
            </div>
        )
    }
}