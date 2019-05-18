import React from 'react';
import { Radio,Checkbox } from 'antd';
import {
  Form, Select, Input, Button,InputNumber
} from 'antd';

const { Option } = Select;
const RadioGroup = Radio.Group;
import FirstRadio from './FirstRadio';
const data=[
  {
    title:"单选",
    key:"1",
    children:[
      {
        title:'a',
        key:"a"
      },
      {
        title:'b',
        key:"b"
      },
      {
        title:'c',
        key:"c"
      },
    ]
  },
  {
    title:"单选1",
    key:"2",
    children:[
      {
        title:'d',
        key:"d"
      },
      {
        title:'e',
        key:"e"
      },
      {
        title:'f',
        key:"f"
      },
    ]
  },
];

const DataCheck=[
  {
    title:"华泰",
    key:"1",
    children:[
      {
        title:"风险",
        key:"risk",
      },
      {
        title:"部门",
        key:"part"
      }
    ]
  },
  {
    title:"华泰1",
    key:"11",
    children:[
      {
        title:"风险1",
        key:"risk1",
      },
      {
        title:"部门1",
        key:"part1"
      }
    ]
  }
];
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const datas=[
  {
    title:'华泰',
    key:"1",
    plainOptions:[
      'Apple', 'Pear', 'Orange'
    ],
    defaultCheckedList:[
      'Apple', 'Orange'
    ]
  },
  {
    title:'华泰1',
    key:"11",
    plainOptions:[
      'Apple1', 'Pear1', 'Orange1'
    ],
    defaultCheckedList:[
      'Apple1', 'Orange1'
    ]
  }
]
const defaultData=[
  'Apple', 'Orange','Apple1', 'Orange1'
]
class RadioButton extends React.Component{
  state = {
    value: 1,
  }
  value=1;
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.value=e.target.value;
    this.setState({
      value: e.target.value,
    });
  }
  onChanges=(e)=>{
    console.log(e);
    console.log(e.target.type);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.offsetParent);
  }
  onChanged=()=>{

  }
  state = {
    checkedList: defaultData,
    indeterminate: true,
    checkAll: false,
  };

  onChange = (checkedList) => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (key,e) => {
    console.log(key)
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.toElement);
    console.log(e.nativeEvent.toElement.offsetParent);
    // e.nativeEvent.toElement.offsetParent.clal('NewContain')
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      checkAll: e.target.checked,
    });
  }
  state={
    value:""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  onHand=(e)=>{
    console.log(e.target.value)
    console.log(typeof(+e.target.value))
    this.setState({Hvalue:+e.target.value})
  }
  onHands=(e)=>{
    console.log(typeof(+e.target.value))
    console.log((+e.target.value + this.state.Hvalue).toFixed(2));
    console.log(((+e.target.value)*(+ this.state.Hvalue) ).toFixed(2));
    var sum =(+e.target.value + this.state.Hvalue);
    var aa= e.target.value +this.state.Hvalue;
    this.setState({value:aa})
    this.props.form.setFieldsValue({"email":sum})
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
        <div>
          <span>首页,快过年了33333！！！</span>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label='ID' >

              {
                getFieldDecorator('ids', {
                  rules:[{
                    required:true,
                    pattern: new RegExp(/^\d+(\.\d{0,2})?$/),
                    message: '请输入数字2，且只有两位小数',

                  }],

                  initialValue:''
                })(<Input  onChange={this.onHand} />)
              }
            </Form.Item>
            <Form.Item label='ID' >

              {
                getFieldDecorator('id', {
                  rules:[{
                    required:true,
                    pattern: new RegExp(/^\d+(\.\d{0,2})?$/),
                    message: '请输入数字2，且只有两位小数',

                  }],

                  initialValue:''
                })(<Input  onChange={this.onHands} />)
              }
            </Form.Item>
            <Form.Item
              label="E-mail"
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input value={this.state.value} />
              )}
            </Form.Item>
            <Form.Item
              label="Gender"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Please select your gender!' }],
              })(
                <Select
                  placeholder="Select a option and change input text above"

                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

          </Form>
        </div>
        {
          datas.map((item,index)=>{
            console.log(item)
            // this.setState({checkAll:item.defaultCheckedList})
            return(
              <div key={item.key}>
                 <Checkbox
                      onChange={this.onCheckAllChange.bind(this,item.key)}
                      checked={this.state.checkAll}
                  >
                       {item.title}
                  </Checkbox>
                  <div>
                  <CheckboxGroup key={item.key} options={item.plainOptions} value={this.state.checkedList} onChange={this.onChange.bind(this,item.key)} />
                  </div>
              </div>
            )
          })
        }

<div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>

        </div>

      </div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
        <div>
          {/* {
            DataCheck.map((item,index)=>{
              return(
                <div>
                  <div className="www" key={item.key}>
                    <Checkbox onChange={this.onChanges}>{item.title}</Checkbox>
                  </div>
                  {
                    item.children.map((item,index)=>{
                      return (
                        <div key={item.key}>
                          <Checkbox onChange={this.onChanged}>{item.title}</Checkbox>
                        </div>

                      )

                    })
                  }
                </div>
              )
            })
          } */}
           {/* <Checkbox onChange={this.onChanges}>Checkbox</Checkbox> */}
        </div>
        <div>
          {/* {
            data.map((item,index)=>{
              return(
                <div>
                  <span>{item.title}</span>
                  <FirstRadio list={item.children} />
                </div>
              )
              })
          } */}
        </div>
      </div>
    )
  }
}

export default Form.create() (RadioButton);
