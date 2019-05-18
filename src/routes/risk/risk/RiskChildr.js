/**
 * Created by zhangheng on 2019/3/18.
 */
import React from 'react';

class RiskChildr extends React.Component{
  state={
    role:"",
    roleId:"",

  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log(nextProps.role)
    console.log(nextProps.roleId)
    if(nextProps.roleId&& nextProps.roleId !=this.state.roleId){
      console.log(11111)
      this.setState({roleId:nextProps.roleId})
      console.log(22222)
    }
  }
  render(){
    return(
      <div>
        SFDSDFSDFDSFDSF
      </div>
    )
  }
}
export default RiskChildr;
