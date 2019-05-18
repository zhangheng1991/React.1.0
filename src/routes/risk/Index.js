/**
 * Created by think on 2018/8/10.
 */
import React from 'react';
import { Form, Row, Col, Input, Button, Icon ,Tabs } from 'antd';
import { Progress } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import IndexForm from './IndexForm';
import Style from '../../components/public/public.less';
import Premission from './index/Premission';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

class Index extends React.Component{
 state = {
    activeKey:"1",
   expand: false,
  };
  save=()=>{
    const { validateFields}=this.refs.krForm;
    validateFields((err,values)=>{
      if(!err){
        console.log(values);
      }
    })
  }
  reset=()=>{
    const { validateFields,resetFields}=this.refs.krForm;
    this.refs.krForm.resetFields();
}
//setFieldsValue
  empty=()=>{
    const { validateFields,resetFields,setFieldsValue}=this.refs.krForm;
    this.refs.krForm.resetFields();
  }
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(

      <div className={Style.IndexBox}>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>

        <div>
    <Progress strokeColor="red" type="circle" percent={55} format={percent => `${percent} %`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </div>
        <div>
          <IndexForm ref="krForm" />
          <div>
            <Button type="primary" htmlType="submit" onClick={this.save}>
            保存
          </Button>
            <Button type="primary" htmlType="submit" onClick={this.reset}>
             重置
            </Button>
            <Button type="primary" htmlType="submit" onClick={this.empty}>
              置空
            </Button>
          </div>
        </div>
        <Premission />
      </div>
    )
  }
}
export default Form.create()(Index);
