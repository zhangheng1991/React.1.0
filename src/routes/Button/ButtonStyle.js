/**
 * Created by zhangheng on 2019/4/12.
 */
import React from 'react';

import { Drawer, Button, Radio } from 'antd';

const RadioGroup = Radio.Group;
import  style from './ButtonStyle.less';
import { Anchor } from 'antd';

const { Link } = Anchor;
class ButtonStyle extends React.Component{ state = {
  loading: false,
  iconLoading: false,
}

  enterLoading = () => {
    this.setState({ loading: true });
    // this.timeID=setInterval(
    //   ()=>this.tick(),10000
    // )
  }
  tick=()=>{
    this.setState({ loading: false });
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }
  render(){
    return(
      <div>
        <div style={{height:"400px",border:"1px solid red"}} id="components-anchor-demo-basic">

        </div>
        <div>
          <RadioGroup
            style={{ marginRight: 8 }}
            defaultValue={this.state.placement}
            onChange={this.onChange}
          >
            <Radio value="top">top</Radio>
            <Radio value="right">right</Radio>
            <Radio value="bottom">bottom</Radio>
            <Radio value="left">left</Radio>
          </RadioGroup>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            placement={this.state.placement}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            className={style.ButtonStyle}
          >

            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>

 <span>

        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br />

        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
      </span>

      </div>
    )

  }
}

export default ButtonStyle;
