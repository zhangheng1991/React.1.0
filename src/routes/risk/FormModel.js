/**
 * Created by think on 2018/8/26.
 */
import React from 'react';
import { Modal,Form, Input, Button, Checkbox} from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class FormModel extends React.Component{
  state = {
    checkNick: false,
  };

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
  render(){
    const { BlankedModelesl,visible} =this.props;
    const { getFieldDecorator } = this.props.form;
    const taskStaOpts={
      title:"Basic Modal",
      visible:visible,
    }

    return(
      <div>
          <div>
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                label="用户名"
                {...formItemLayout}
              >
                {getFieldDecorator('note', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(
                  <Input placeholder="请输入用户名" />

                )}
              </FormItem>
              <FormItem
                label="密码"
                {...formItemLayout}
              >
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: '请输入密码!' }],
                })(

                  <Input placeholder="请输入密码" />
                )}
              </FormItem>
              <FormItem
                wrapperCol={{ span: 24 }}
              >
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
      </div>
    )
  }
}
export default Form.create()(connect(({BlankedModeles}) => ({ BlankedModeles})) ( FormModel))  ;
