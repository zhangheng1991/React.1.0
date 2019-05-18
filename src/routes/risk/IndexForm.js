import React from 'react';
import { Form, Select, Input, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const TargetChart={
  name:'张恒',

};
class IndexForm extends React.Component{
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value,e) => {
    console.log(e);

    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="姓名"
            {...formItemLayout}
          >
            {getFieldDecorator('name', {initialValue:TargetChart.name,
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              <Input />
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
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="maleww">male</Option>
                <Option value="femaleww">female</Option>

              </Select>
            )}
          </FormItem>

        </Form>
      </div>
    )
  }
}

export default   Form.create() (IndexForm);
