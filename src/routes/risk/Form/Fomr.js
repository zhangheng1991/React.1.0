/**
 * Created by zhangheng on 2019/3/27.
 */
import React from 'react';import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { connect } from 'dva';
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
import { DatePicker } from 'antd';
import moment from 'moment';
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class Fomr extends React.Component{
  state = {
    checkNick: false,
  };
  check = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('success');
        }
      },
    );
  }

  handleChange = (e) => {
    this.setState({
      checkNick: e.target.checked,
    }, () => {
      this.props.form.validateFields(['nickname'], { force: true });
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;

    const times='2015-06-16';
    const dateFormat = 'YYYY-MM-DD';
    const Formes={
      time:"2015-06-16"
    }
    return(
      <div>
        <div>
          <Form.Item {...formItemLayout} label="Name">
            {getFieldDecorator('time', {
              initialValue:Formes.time?moment(Formes.time==3211111?new Date():new Date(Formes.time),"YYYY-MM-dd"):null,
              rules: [{
                required: true,
                message: 'Please input your name',
              }],
            })(
              <DatePicker   />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Nickname">
            {getFieldDecorator('nickname', {
              rules: [{
                required: this.state.checkNick,
                message: 'Please input your nickname',
              }],

            })(
              <Input placeholder="Please input your nickname" />
            )}
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Checkbox
              checked={this.state.checkNick}
              onChange={this.handleChange}
            >
              Nickname is required
            </Checkbox>
          </Form.Item>
          <Form.Item {...formTailLayout}>
            <Button type="primary" onClick={this.check}>
              Check
            </Button>
          </Form.Item>
        </div>
      </div>
    )
  }
}

export default  Form.create()(Fomr) ;
