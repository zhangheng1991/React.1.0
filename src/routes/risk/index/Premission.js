import React from 'react';
import {Input } from 'antd';
import style from '../style.less';
const data=[
  {
    title:"风险类型",
    key:"1",
    children:[
      {
        title:"风险监控",
        key:"1-1"
      },
      {
        title:"资本管理",
        key:"1-2"
      },
      {
        title:"市场分风险",
        key:"1-3"
      },
      {
        title:"华泰香港",
        key:"1-4"
      },
    ]
  },
  {
    title:"业务线",
    key:"2",
    children:[
      {
        title:"风险监控",
        key:"2-1"
      },
      {
        title:"资本管理",
        key:"2-2"
      },
      {
        title:"市场分风险",
        key:"2-3"
      },
      {
        title:"华泰香港",
        key:"2-4"
      },
    ]
  }
]
class Premission extends React.Component{
  onCheckAll=(index,item)=>{
    console.log(index)
    console.log(item)
    console.log(this)
  }
  render(){
    return(
      <div>
       <div className={style.TestInput}>
         <Input placeholder="Basic usage" />
       </div>
        <div>
          {
            data.map((item,index)=>{
              console.log(item)
              return(
                <div>
                  <div key={item.key}>
                    <label><input key={item.key} type="checkbox" value="" onClick={this.onCheckAll.bind(this,index,item)}/>  </label>
                    <span>{item.title}</span>
                  </div>
                  <div>
                    {
                      item.children.map((item,index)=>{
                        return(
                          <div>
                            <label><input name="Fruit" type="checkbox" value="" />  </label>
                            <span>{item.title}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default Premission;
