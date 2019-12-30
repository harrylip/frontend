import React from 'react';
import {Link} from 'react-router-dom'
import {Menu,Icon,Tooltip} from 'antd';
const { SubMenu } = Menu;

var ActionCss = require('./action.css')
export default class HomePage extends React.Component{
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
            <div className={ActionCss.main}>
                <div className={ActionCss.top}>
                    <div className={ActionCss.top2}><Icon type="fire" />精彩活动</div>
                </div>
                <div className={ActionCss.mid}>
               <Menu className={ActionCss.menu} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="1" disabled>
                        <Tooltip title="不可操作">
                            <Link to="/action">
                            <Icon type="fire" />精彩活动
                            </Link>
                            </Tooltip>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <a href="https://unsplash.com/s/photos/tea" target="_blank" rel="noopener noreferrer">
                            <Icon type="flag" />
                            茶的分类
                            </a>
                        }
                        >
                        <Menu.ItemGroup title="绿茶">
                            <Menu.Item key="setting:1">普洱茶</Menu.Item>
                            <Menu.Item key="setting:2">铁观音</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="红茶">
                            <Menu.Item key="setting:3">印度红茶</Menu.Item>
                            <Menu.Item key="setting:4">斯里兰卡红茶</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="黑茶">
                            <Menu.Item key="setting:5">安化白沙溪黑茶</Menu.Item>
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
                    <SubMenu
                        title={
                            <a href="https://unsplash.com/s/photos/tea" target="_blank" rel="noopener noreferrer">
                            <Icon type="shop" />
                            商铺
                            </a>
                        }
                        >
                        <Menu.ItemGroup title="绿茶">
                            <Menu.Item key="setting:1">普洱茶</Menu.Item>
                            <Menu.Item key="setting:2">铁观音</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="茶点">
                        </Menu.ItemGroup>
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
                <div className={ActionCss.ph}>
                    <h3><img src="banner1.png" width="80%" height="350px"></img></h3>
                    <h3><img src="banner2.png" width="80%" height="350px"></img></h3>
                    <h3><img src="banner3.png" width="80%" height="350px"></img></h3>
                </div>
            </div>
        )
    }
}