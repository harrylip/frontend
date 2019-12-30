import React from 'react';
import {Link} from 'react-router-dom'
import {Menu,Icon,Tooltip,Tabs} from 'antd';
const { SubMenu } = Menu;
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }

var StoreCss = require('./store.css')
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
            <div className={StoreCss.main}>
                <div className={StoreCss.top}>
                    <div className={StoreCss.top2}><Icon type="flag" />茶的分类</div>
                </div>
                <div className={StoreCss.mid}>
               <Menu className={StoreCss.menu} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
               <Menu.Item key="1">
                        <Link to="/action"><Icon type="fire" />精彩活动</Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <Tooltip title="不可操作">
                            <Link to="/class">
                            <Icon type="flag" />茶的分类
                            </Link>
                            </Tooltip>
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
                            <a href="https://unsplash.com/s/photos/tea" target="_blank" rel="noopener noreferrer">
                            <Icon type="shop" />
                            商铺
                            </a>
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
                <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="茶" key="1">
                        <div className={StoreCss.a1}>
                            
                        </div>
                        <div className={StoreCss.a1}>
                            
                        </div>
                    </TabPane>
                    <TabPane tab="茶具" key="2">
                        <div className={StoreCss.a1}>
                            
                        </div>
                    </TabPane>
                    <TabPane tab="茶点" key="3">
                        <div className={StoreCss.a1}>
                            
                        </div>
                    </TabPane>
                    
                </Tabs>
                </div>
            </div>
        )
    }
}