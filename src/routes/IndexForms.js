import React from 'react';
import { connect } from 'dva';
import { Form, Select, Input, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
class IndexPage extends React.Component{
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
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });

  }
  clear=()=>{
    this.props.form.resetFields();
  }
  onSearch=()=>{
    this.props.form.setFieldsValue({
      note:" ",gender:"male"
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };


    return(
      <div style={{background:"#e9e9e9",padding:"20px",boxShadow: "0px 5px 12px 2px rgba(72,72,72,0.1)"}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="搜索"
            {...formItemLayout}
          >
            {getFieldDecorator('sousuo',
            )(
              <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                enterButton="搜索"
              />
            )}
          </FormItem>
          <FormItem
            label="Note"
            {...formItemLayout}
          >
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="Gender"
            {...formItemLayout}
          >
            {getFieldDecorator('gender', {
              initialValue:"male",
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
          >

          </FormItem>
        </Form>
      </div>
    )
  }
}
export default Form.create() ( connect()(IndexPage) );
