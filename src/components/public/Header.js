/**
 * Created by think on 2018/8/10.
 */
import React from 'react';
import 'antd/dist/antd.css';
import style from  './public.less';
import '../../routes/risk/Index.less';
import { Row,Col, Menu, Dropdown,Icon,Input,Button,Modal,Form} from 'antd';
import { Link } from 'react-router';
import {connect} from 'dva';
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import FormModal from '../../routes/risk/FormModel';
import EditleTable from "../../routes/test/EditleTable";
import EditleTree from "../../routes/test/EditleTree";
import RadioButton from "../../routes/risk/RadioButton/RadioButton";
import TestThis from "../../routes/risk/TestThis/TestThis";
const menu = (
  <div className={style.dropdownBox}>
    <Col span="8"><Link>宝宝相册</Link></Col>
    <Col span="8"><Link>母婴用品</Link></Col>
    <Col span="8"><Link>生活用品</Link></Col>
    <Col span="8"><Link>育婴百科</Link></Col>
    <Col span="8"><Link>宝宝摄影</Link></Col>
    <Col span="8"><Link>宝宝用品</Link></Col>
    <Col span="8"><Link>宝宝相册</Link></Col>
    <Col span="8"><Link>母婴用品</Link></Col>

  </div>
);
const menuphoto = (
  <div className={style.dropdownPhoto}>
    <Col span="12"><Link>上传</Link></Col>
    <Col span="12"><Link>我的菜单</Link></Col>
    <Col span="12"><Link>上传专辑</Link></Col>
    <Col span="12"><Link>我的专辑</Link></Col>
    <Col span="12"><Link>抓取</Link></Col>
    <Col span="12"><Link>退出</Link></Col>
  </div>
);
// systemView.Fiexd(app),
//   systemView.Form(app),
//   systemView.Date(app),
//   systemView.Dates(app),
//   systemView.TableTest(app),
//   systemView.Lines(app),
//   systemView.HLines(app),
const MenuData=[
  {
    title:"首页",
    key:"index"
  },
  {
    title:"发现",
    key:"Risk"
  },
  {
    title:"最新",
    key:"Test",
    children:[
      {
        title:"测试",
        key:"Test"
      },
      {
        title:"循环",
        key:"ForEach"
      },
      {
        title:"单选按钮",
        key:"RadioButton"
      },
      {
        title:"弹性布局",
        key:"ElasticLayout"
      }, {
        title:"找到",
        key:"TestThis",

      }, {
        title:"查看更多",
        key:"VeiwMore",

      }
    ]
  },

  {
    title:"表格",
    key:"EditleTable"
  },
  {
    title:"树节点",
    key:"EditleTree",
    children:[
      {
        title:"固定",
        key:"Fiexd"
      },
      {
        title:"表格",
        key:"Form"
      },
      {
        title:"日期",
        key:"Date"
      },
      {
        title:"年月日",
        key:"Dates"
      },
      {
        title:"测试表格",
        key:"TableTest"
      },
      {
        title:"echarts",
        key:"Lines"
      },
      {
        title:"highecharts",
        key:"HLines"
      },
      {
        title:"按钮",
        key:"ButtonStyle"
      },
      // ButtonStyle
    ]
  },
]
class Header extends React.Component{
  state = {
    keyId:'index'
  }
  componentWillMount(){
    console.log(this.props.pathName)
    //str.substr(1, 2))
    console.log(this.props.pathName.substr(1,this.props.pathName.length))
    if(this.props.pathName &&this.props.pathName.length>0){
      this.setState({keyId:this.props.pathName.substr(1,this.props.pathName.length)})

    }
  }
  handleClick = (e) => {
    this.setState({
      keyId: e.key,
    });
  }
  onSearch=(value)=>{
    console.log(value)
  }
  state = { visible: false }

  showModal =()=> {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });

  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render(){

    const  { BlankedModeles } =this.props;
    const { BlankModal } = BlankedModeles;
    const loop =data=>data.map((item)=>{
      if(item.children &&item.children.length>0&&item.key){
          return(
            <SubMenu key={item.key} title={<span title={item.key}>{item.title}</span>} >
              {loop(item.children)}
            </SubMenu>
          )
      }else{
        return(
          <Menu.Item key={item.key}>
            <Link title={item.title} to={item.key} >{item.title}</Link>
          </Menu.Item>
        )
      }
    })
    console.log(MenuData);
    return(

      <div className={style.heander}>
        <Col span="2">
            <span className={style.heanderTitle}>
              优可宝宝
            </span>
          </Col>
        <Col span="2">
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#">
             分类 <Icon type="down" />
            </a>
          </Dropdown>
        </Col>
        <Col span="10">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.keyId]}
            mode="horizontal"
          >
            {/*<Menu.Item key="index">*/}
              {/*<Link to={{pathname:'/index', query:{code:'index' , index:1,key:1 }}}> 首页</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="Risk" >*/}
              {/*<Link to={{pathname:'/Risk', query:{code:'Risk' , index:2,key:2 }}}> 发现</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="Test" >*/}
              {/*<Link to={{pathname:'/Test', query:{code:'Test' , index:2,key:2 }}}> 最新</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="EditleTable" >*/}
              {/*<Link to={{pathname:'/EditleTable', query:{code:'EditleTable' , index:3,key:3 }}}> 表格</Link>*/}
            {/*</Menu.Item>*/}
            {/*<Menu.Item key="EditleTree" >*/}
              {/*<Link to={{pathname:'/EditleTree', query:{code:'EditleTree' , index:4,key:4 }}}> 树节点</Link>*/}
            {/*</Menu.Item>*/}
            {loop(MenuData)}
          </Menu>
        </Col>
        <Col span="5">
          <Search
            placeholder="搜你喜欢的"
            onSearch={this.onSearch}
            style={{ width: 200,height:'30px' }}
          />
        </Col>
        <div className={this.props.icon}>
         <Col span="2">
          <span className={style.heanderAdd}>
            +
          </span>
         </Col>
         <Col span="2" style={{overFlow:"hidden"}}>
           <Dropdown overlay={menuphoto} trigger={['click']}>
              <span className={style.heanderPhoto}>

          </span>
           </Dropdown>

         </Col>
       </div>
        <div className={this.props.button}>
         <Col span="2"><Button type="primary" onClick={this.showModal}>
            登录
           <div className={style.headerModal}>
             <Modal  title="登录"
                     visible={this.state.visible}
                     onOk={this.handleOk}
                     onCancel={this.handleCancel}
                     footer={null}
                     wrapClassName={style.headerModal}>
               <FormModal />
             </Modal>
           </div>
         </Button></Col>
         <Col span="2"><Button >注册</Button></Col>

       </div>
      </div>
    )
  }
}

export default connect(({ BlankedModeles }) => ({ BlankedModeles })) (Header);
