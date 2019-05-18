/**
 * Created by think on 2018/8/10.
 */
import React from 'react';
import RiskForm from './RiskForm';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import style from './risk/rifk.less';
import RiskChildr from './risk/RiskChildr';
const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;
import { Select } from 'antd';
import { Modal, Button } from 'antd';
const Option = Select.Option;


const data =[
  {
    title:"标题",
    key:"1",
  },{
    title:"标题1",
    key:"2",
  },
  {
    title:"标题2",
    key:"3",
  },
  {
    title:"标题4",
    key:"4",
  },

]
class Risk extends React.Component{
  state={
  collapsed: false,
    role:"true",
    roleId:"",
    count:0,
    value:"lucy",
}
componentWillMount(){

  var aa =document.getElementsByClassName("www");
  if(aa[0]){
    aa.innerHTML="Asdsadasdsad";
  }

  console.log(aa)

  this.setState({count:1})
  console.log(this.state.count)
  this.setState({count:1},()=>{
    console.log(this.state.count)
  })
  console.log(this.state.count)
  let number=123.123;
  console.log(parseInt(number)) //123
  console.log(~~ number);//123
  console.log(number | 0);//123
  console.log(number ^ 0);//123
  console.log(number << 0);//123
}
onCollapse = (collapsed) => {
  console.log(collapsed);
  this.setState({ collapsed });
}
  HandCilck=(id,e)=>{
    console.log(this.state.role)
    this.setState({role:id})
    console.log(this.state.role)
    this.setState({roleId:id},()=>{
      // this.state.roleId=222;
     console.log(this.state.roleId)
    })
    console.log(e)
    console.log(id)
  }

   handleChange=(value,e)=> {
     console.log(e)
     console.log(e.props)
     console.log(e.props.value)
     console.log(e.props.children);
     this.setState({value:value})
  console.log(`selected ${value}`);
}
  state = { visible: false }

  showModal = () => {
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

    return(
      <div className="www">
        <div>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={
           <div>
             <Button> 取消</Button>
             <Button> 保存</Button>
             <Button> 提交</Button>
           </div>
            }
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>

        <Select value={this.state.value} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="test">测试</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        {
          data.map((item,index)=>{
            return(
              <div className={style.BoxCon}  key={item.key}>
                <span onClick={this.HandCilck.bind(this,item.key)}>{item.title}</span>
              </div>
            )
          })
        }
        <RiskChildr role={this.state.role} roleId={this.state.roleId} />
        <div className={style.Posied}>
        </div>
        <div className={style.parent}>
          <div className={style.child}>
            双方的水电费水电费是
          </div>
          <div className={style.child}>
            双方的水电费水电费是
          </div>
          <div className={style.child}>
            双方的水电费水电费是
          </div>
        </div>
        {/*我是测试风险集中监控*/}
        {/*<RiskForm />*/}
      </div>
    )
  }
}
export default Risk;
