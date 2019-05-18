/**
 * Created by zhangheng on 2019/4/1.
 */
import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

import { Menu, Icon } from 'antd';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import moment from 'moment';
import style from './Date.less';
import { Select } from 'antd';

const Option = Select.Option;


const dateFormat = 'YYYY-MM-DD';
const defaultSelectDate = {
  startDate:moment().startOf('day').subtract(2, 'days'),
  endDate:moment().endOf('day').subtract(1, 'days')
};
class Date extends  React.Component{
  state={
    startDate:moment().format("YYYYMMDD"),
    endDate:moment().format("YYYYMMDD"),
    current: 'mail',
    key:" ",
    OpenKey:false,
    value:"今天",
    radioValue:"风险"
  }
  handleChange=(value)=> {
    this.setState({value:value})
    this.setState({
      startDate:moment().format("YYYYMMDD")
    })
    if(value=="今天"){
      this.setState({
        endDate:moment().format("YYYYMMDD")
      })
    }
    if(value=="近7天"){
      this.setState({
        endDate:moment().subtract(6,"days").format("YYYYMMDD")
      })
    }
    if(value=="近15天"){
      this.setState({
        endDate:moment().subtract(14,"days").format("YYYYMMDD")
      })
    }
    if(value=="近30天"){
      this.setState({
        endDate:moment().subtract(29,"days").format("YYYYMMDD")
      })
    }
    if(value=="近半年"){
      this.setState({
        endDate:moment().subtract(0.5,"year").format("YYYYMMDD")
      })
    }
    if(value=="近1年"){
      this.setState({
        endDate:moment().subtract(1,"year").format("YYYYMMDD")
      })
    }
    if(value=="自定义"){
      // this.setState({key:"自定义"})
      // console.log(this.state.key)
      this.setState({key:"自定义", OpenKey:true},()=>{
        key:"自定义";
        OpenKey:true;
        // this.onChange()
      });
    }
    console.log(this.state.endDate)
}
  handleClick = (e) => {
    console.log(moment().subtract(1,"days").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"week").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"month").format("YYYYMMDD"))
    // console.log(moment().subtract(1,"year").format("YYYYMMDD"))
    // console.log(moment().startOf('day').format("YYYYMMDD"))
    // console.log(moment().startOf('week').format("YYYYMMDD"))
    // console.log(moment().startOf('month').format("YYYYMMDD"))
    // console.log(moment().startOf('year').format("YYYYMMDD"))
    console.log(e.key);
    if(e.key=="近7天"){
      console.log(111);

      this.setState({
        endDate:moment().subtract(7,"days").format("YYYYMMDD")
      })

    }
    this.setState({
      current: e.key,
    });
  }
 onChange=(value, dateString)=> {
   console.log(1111)
  console.log(value);
   if(value.length==0){
    console.log(333)
     this.setState({startDate:moment().format("YYYYMMDD"),endDate:moment().format("YYYYMMDD")})
     this.setState({value:"今天"})

   }else{
     console.log(dateString);
     console.log(this.state.key)
     const {key}=this.state;
     console.log(key)
     this.setState({startDate:dateString[0],endDate:dateString[1]})
   }

}

  onOk=(value)=> {
    console.log(value);
    console.log(value[0]._i)
    console.log(value[1]._i)
    this.setState({key:" ", OpenKey:false})
    this.setState({value:"自定义"})
}
  onOpenChange=(status)=>{
    console.log(status)
    if(status==true){
      this.setState({ OpenKey:true})
    }
    if(status==false){
      this.setState({ OpenKey:false})
    }
    console.log(111)
  }
  onChanged=(e)=> {
    console.log(`radio checked:${e.target.value}`);
    this.setState({radioValue:e.target.value})
    console.log(this.state.radioValue)

  }


  render(){
  const { key,radioValue}=this.state;
    console.log(radioValue);

    return(
      <div>
        <Select value={this.state.value} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="今天">今天</Option>
          <Option value="近7天">近7天</Option>
          <Option value="近15天" >近15天</Option>
          <Option value="近30天">近30天</Option>
          <Option value="近半年">近半年</Option>
          <Option value="近1年">近1年</Option>
          <Option value="自定义">自定义</Option>

        </Select>
        <RangePicker
          allowClear={false}
          open={this.state.OpenKey}
          showTime
          format="YYYY-MM-DD"
          placeholder={['开始日期', '结束日期']}
          onChange={this.onChange}
          onOk={this.onOk}
          onOpenChange={this.onOpenChange}
          value={[moment(this.state.startDate,"YYYYMMDD"),moment(this.state.endDate,"YYYYMMDD")]}
        />
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >

          <Menu.Item key="today">
          今天
          </Menu.Item>
          <Menu.Item key="moring">
           明天
          </Menu.Item>

          <Menu.Item key="week">
          本周
          </Menu.Item>
        </Menu>
        <div className={style.RadioButton}>
          <RadioGroup onChange={this.onChanged} defaultValue="a">
            <RadioButton value="风险">风险</RadioButton>
            <RadioButton value="运维">运维</RadioButton>
            <RadioButton value="管理">管理</RadioButton>
            <RadioButton value="平台">平台</RadioButton>
          </RadioGroup>
        </div>
sdfdssefsdfs

      </div>
    )
  }
}


export default Date;

