import React from 'react'
import style from './public.less';
const data =[
  {
    title:"标题",
    key:"1",
    children:[
      {
        key:"1-1",
        title:"副标题1标题",
        content:"内容1",
        child:"1-1-1",
        children:[
          {
            key:"1-1-1",
            title:"副标题2标题",
            content:"内容2",
            parent:"1-1"
          }
        ]
      },
      {
        key:"1-2",
        title:"副标题2标题",
        content:"内容2",
        child:"1-1-2",
        children:[
          {
            key:"1-1-2",
            title:"副标题3标题",
            content:"内容3",
            parent:"1-2"
          }
        ]
      }
    ],
  },
  {
    title:"标题二",
    key:"2",
    children:[
      {
        key:"2-1",
        title:"标题二的副标题标题",
        child:"2-1-1",
        children:[
          {
            key:"2-1-1",
            title:"标题二的内容",
            parent:"2-1"
          }
        ]
      }
    ]
  },
]
class ForEach extends React.Component{
  state={
     show:false,
     mShow:"",
     mHidden:""
  }
  show=(key)=>{
    console.log(key);
    //mShow
    this.setState({ mShow:key})
   this.setState({ show:true})
    console.log(this);
  }
  hidden=(key)=>{
    console.log(key)
    this.setState({ mHidden:key})
    this.setState({ show:false})
    console.log(this);
  }
  render(){
    var classString="CycleAccording";
    if(this.state.show){
      classString=classString + " daily-show";
    }
    return(
      <div className={style.CycleBox}>
         循环
        {
          data.map((item,index)=>{
            return(
              <div>
                 <div key={item.key} className={style.CycleTitle}>
                   <h3>{item.title}</h3>
                   <span>全部</span>
                 </div>
              {
              item.children.map((item,index)=>{
                console.log(item.key)
                return(
                 <div className={classString} key={item.key}>
                   <div  className="CyclePositive">
                     <h3>{item.title}</h3>
                     <div>
                       {item.content}
                     </div>
                     <div className={style.CycleBottom}>
                       <span onClick={this.show.bind(this,item.key)}>显示</span>
                     </div>
                   </div>
                   <div className="CycleReverse">
                     {
                       item.children.map((item,index)=>{
                         return(
                           <div>
                             <h3>{item.title}</h3>
                             <div>
                               {item.content}
                             </div>
                             <div className={style.CycleBottom}>
                               <span onClick={this.hidden.bind(this,item.parent)}>隐藏</span>
                             </div>
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
            )
          })
        }
      </div>
    )
  }
}

export default ForEach;
