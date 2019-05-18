import React from 'react';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
class FirstRadio extends React.Component{
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
  render(){
    const {item }=this.props;
    return(
      <div>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={item.key}>{item.title}</Radio>
        </RadioGroup>
      </div>
    )
  }
}
export default FirstRadio;
