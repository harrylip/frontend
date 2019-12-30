import React from 'react';
import {Link} from 'react-router-dom'
import {Menu,Icon,Tooltip,Tabs} from 'antd';
const { SubMenu } = Menu;
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }

var ClassCss = require('./class.css')
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
            <div className={ClassCss.main}>
                <div className={ClassCss.top}>
                    <div className={ClassCss.top2}><Icon type="flag" />茶的分类</div>
                </div>
                <div className={ClassCss.mid}>
               <Menu className={ClassCss.menu} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
               <Menu.Item key="1">
                        <Link to="/action"><Icon type="fire" />精彩活动</Link>
                    </Menu.Item>
                    <SubMenu disabled
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
                    <TabPane tab="绿茶" key="1">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="bl.jpg" width="500px" height="350px"  title="碧螺春茶"></img>
                            <div className={ClassCss.a11}>碧螺春茶</div>
                            <div className={ClassCss.a12}>
                                碧螺春是中国传统名茶，中国十大名茶之一，属于绿茶类，已有1000多年历史。碧螺春产于江苏省苏州市吴县太湖的东洞庭山及西洞庭山（今苏州吴中区）一带，
                                所以又称“洞庭碧螺春”。唐朝时就被列为贡品，古人们又称碧螺春为“功夫茶”、“新血茶”。高级的碧螺春，茶芽之细嫩0.5公斤干茶需要茶芽6-7万个。炒成后的干茶条索紧结，白毫显露，色泽银绿，翠碧诱人，卷曲成螺，产于春季，故名“碧螺春”。此茶冲泡后杯中白云翻滚，清香袭入，是中国的名茶。主要工序为杀青、揉捻、搓团显毫、炒青。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="em.png" width="500px" height="350px"  title="峨眉竹叶青"></img>
                            <div className={ClassCss.a11}>峨眉竹叶青</div>
                            <div className={ClassCss.a12}>
                            峨眉竹叶青产于峨眉山。峨眉山产茶历史悠久，宋代苏东坡题诗赞曰：“我今贫病长苦饥，盼无玉腕捧峨眉。”著名诗人陆游也题诗赞曰：“雪芽近自峨眉得，不减红镶顾渚春。”峨眉竹叶青是在总结峨眉山万年寺僧人长期种茶制茶基础上发展而成的，于1964年由陈毅命名，此后开始批量生产。1985年第24届时节优质食品评比会上获金质奖。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="dy.jpg" width="500px" height="350px"  title="都匀毛尖"></img>
                            <div className={ClassCss.a11}>都匀毛尖</div>
                            <div className={ClassCss.a12}>
                            都匀毛尖， 中国十大名茶之一。1956年，由毛泽东亲笔命名，又名“白毛尖”、“细毛尖”、“鱼钩茶”、“雀舌茶”，是贵州三大名茶之一。外形条索紧结纤细卷曲、披毫，色绿翠。香清高，味鲜浓，叶底嫩绿匀整明亮。产于贵州都匀市，属黔南布依族苗族自治州。味道好，还具有生津解渴、清心明目、提神醒脑、去腻消食、抑制动脉粥样硬化、降脂减肥以及防癌、防治坏血病和护御放射性元素等多种功效与作用。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="es.jpg" width="500px" height="350px"  title="恩施玉露"></img>
                            <div className={ClassCss.a11}>恩施玉露</div>
                            <div className={ClassCss.a12}>
                            恩施玉露，湖北省恩施市特产，中国国家地理标志产品。 [1-2] 
恩施玉露外形条索紧圆光滑、纤细挺直如针，色泽苍翠绿润。经沸水冲泡，芽叶复展如生，初时婷婷地悬浮杯中，继而沉降杯底，平伏完整，汤色嫩绿明亮，如玉露，香气清爽，滋味醇和。观其外形，赏心悦目；饮其茶汤，沁人心脾。 [3-4] 
2007年03月05日，原国家质检总局批准对“恩施玉露”实施地理标志产品保护。
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="红茶" key="2">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="as.jpg" width="500px" height="350px"  title="阿萨姆红茶"></img>
                            <div className={ClassCss.a11}>阿萨姆红茶</div>
                            <div className={ClassCss.a12}>
                            阿萨姆红茶是产于印度东北部的茶叶，茶叶外形细扁，色呈深褐；汤色深红稍褐，带有淡淡的麦芽香、玫瑰香，滋味浓，属烈茶，是冬季饮茶的最佳选择。
阿萨姆位于东喜马拉雅山南麓，与不丹相邻。在历史上，阿萨姆是继中国以后第二个商业茶叶生产地区。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="sl.jpg" width="500px" height="350px"  title="斯里兰卡红茶"></img>
                            <div className={ClassCss.a11}>斯里兰卡红茶</div>
                            <div className={ClassCss.a12}>
                            斯里兰卡红茶，斯第一棵茶树种于1824年，据说系中国茶种，后又从印度阿萨姆邦引入新茶种。1867年后开始大规模开山种茶，所产均用于制造红茶。茶叶须经蒸发脱水、抽去茎梗、碾碎后发醇，烘干等工序加工。饮用时加奶加糖。斯红茶质量优异，驰名全球。茶叶按海拔分高地茶、中地茶和低地茶，其中高地茶品质最佳。年产量约5亿磅，居世界第二，其中88·5%销往欧洲、中东等地。
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="黑茶" key="3">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="pr.jpg" width="500px" height="350px"  title="普洱茶"></img>
                            <div className={ClassCss.a11}>普洱茶</div>
                            <div className={ClassCss.a12}>
                            普洱茶（学名：Camellia sinensis var. assamica），大乔木，高达16米，嫩枝有微毛，顶芽有白柔毛。叶薄革质，椭圆形，上面干后褐绿色，略有光泽，下面浅绿色，中肋上有柔毛，其余被短柔毛，老叶变秃；侧脉8-9对，在上面明显。花腋生，被柔毛。苞片2，早落。萼片5，近圆形，外面无毛。花瓣6-7片，倒卵形，无毛。雄蕊长8-10毫米，离生，无毛。子房3室，被茸毛；花柱长8毫米，先端3裂。蒴果扁三角球形。种子每室1个，近圆形，直径1厘米。（标本信息来自中国植物志） [1] 
普洱茶主要产于云南省的西双版纳、临沧、普洱等地区。普洱茶讲究冲泡技巧和品饮艺术，其饮用方法丰富，既可清饮，也可混饮。普洱茶茶汤橙黄浓厚，香气高锐持久，香型独特，滋味浓醇，经久耐泡。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="ah.jpg" width="500px" height="350px"  title="安化白沙溪黑茶"></img>
                            <div className={ClassCss.a11}>安化白沙溪黑茶</div>
                            <div className={ClassCss.a12}>
                            “白沙溪“为最早的湖南黑茶生产企业之一，公司成立于1939年1月，历史悠久，“白沙溪”系列产品包括“三砖”，“三尖”，一“花卷","其中“三砖为“黑砖，花砖，茯砖”茶，“三尖”为“天尖，贡尖，生尖”茶，“花卷”系列包括“万两茶、千两茶，百两茶，十两茶”！
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="乌龙茶" key="4">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="tg.jpg" width="500px" height="350px"  title="铁观音"></img>
                            <div className={ClassCss.a11}>铁观音</div>
                            <div className={ClassCss.a12}>
                            铁观音（tiě guān yīn）茶，中国传统名茶，属于青茶类，是中国十大名茶之一。原产于福建泉州市安溪县西坪镇，发现于1723—1735年。“铁观音”既是茶名，也是茶树品种名，铁观音茶介于绿茶和红茶之间，属于半发酵茶类，铁观音独具“观音韵”，清香雅韵，冲泡后有天然的兰花香，滋味纯浓,香气馥郁持久，有“七泡有余香之誉 ”。除具有一般茶叶的保健功能外，还具有抗衰老、抗动脉硬化、防治糖尿病、减肥健美、防治龋齿、清热降火，敌烟醒酒等功效。
铁观音含有较高的氨基酸、维生素、矿物质、茶多酚和生物碱，有多种营养和药效成分，具有养生保健的功能。于民国八年自福建安溪引进木栅区试种，分“红心铁观音”及“青心铁观音”两种，主要产区在文山期树属横张型，枝干粗硬，叶较稀松，芽少叶厚，产量不高，但制包种茶品质高，产期较青心乌龙晚。其树形稍，叶呈椭圆形，叶厚肉多。叶片平坦展开。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="dh.jpg" width="500px" height="350px"  title="大红袍"></img>
                            <div className={ClassCss.a11}>大红袍</div>
                            <div className={ClassCss.a12}>
                            大红袍，产于福建武夷山，属乌龙茶，品质优异。中国特种名茶。其外形条索紧结，色泽绿褐鲜润，冲泡后汤色橙黄明亮，叶片红绿相间。品质最突出之处是香气馥郁有兰花香，香高而持久，“岩韵”明显。除与一般茶叶具有提神益思，消除疲劳、生津利尿、解热防暑、杀菌消炎、解毒防病、消食去腻、减肥健美等保健功能外，还具有防癌症、降血脂、抗衰老、等特殊功效。大红袍很耐冲泡，冲泡七、八次仍有香味。品饮“大红袍”茶，必须按“工夫茶”小壶小杯细品慢饮的程式，才能真正品尝到岩茶之颠的禅茶韵味。注重活 、甘、清、香。
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="花茶" key="5">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="ml.jpg" width="500px" height="350px"  title="茉莉花茶"></img>
                            <div className={ClassCss.a11}>茉莉花茶</div>
                            <div className={ClassCss.a12}>
                            茉莉花茶（Jasmine Tea），又叫茉莉香片，属于花茶，茶胚为绿茶，成品将茉莉花去除，亦属于绿茶的一种，已有1000多年历史。世界茉莉花茶发源地为福建福州，其茶香与茉莉花香交互融合，有“窨得茉莉无上味，列作人间第一香”的美誉，茉莉花茶是花茶的大宗产品，产区辽阔，产量高，品种丰富。
在清朝时被列为贡品，有150多年历史。福州茉莉花茶源于汉，中医的创新促进福州茉莉花茶诞生，宋朝中医局方学派对香气和茶保健作用的充分认识，引发香茶热，诞生了数十种香茶。新中国成立以来，福州茉莉花茶一直是国家的外事礼茶。茉莉花茶是将茶叶和茉莉鲜花进行拼和、窨制，使茶叶吸收花香而成的茶叶。其香气鲜灵持久、滋味醇厚鲜爽、汤色黄绿明亮、叶底嫩匀柔软。经过一系列工艺流程窨制而成的茉莉花茶，具有安神、解抑郁、健脾理气、抗衰老、提高机体免疫力的功效，是一种健康饮品。
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="新式茶" key="6">
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="ts.jpg" width="500px" height="350px"  title="台式奶茶"></img>
                            <div className={ClassCss.a11}>台式奶茶</div>
                            <div className={ClassCss.a12}>
                            台式奶茶，以珍珠奶茶闻名。最早出现于中国台湾，是泡沫红茶的一种延伸，主要由茶、奶和粉圆组合而成。由此刮起了一股台旋风奶茶潮流，被捧为经典奶茶的一种。
                            </div>
                        </div>
                        <div className={ClassCss.a1}>
                            <img className={ClassCss.p1} src="gs.jpg" width="500px" height="350px"  title="港式奶茶"></img>
                            <div className={ClassCss.a11}>港式奶茶</div>
                            <div className={ClassCss.a12}>
                            港式奶茶是香港独有饮品，茶味重偏苦涩，口感爽滑且香醇浓厚为特点。制作方法较大陆奶茶复杂，经过撞茶（拉茶）工序，保证奶茶中保留茶叶的浓厚。后来人们称之“香港老街ST0RY”奶茶。
之所以“港式奶茶”能声名鹊起，而在内地却不能像“台湾奶茶”普及，有一个重要原因是它所用的原材料。（当然奶就不多解释了）得益于香港独天得厚和贸易自由优势，港式奶茶中的红茶都是从斯里兰卡大量进口的。斯里兰卡独特的雨水充沛的热带气候让这里出产的红茶香味浓郁。
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                </div>
            </div>
        )
    }
}