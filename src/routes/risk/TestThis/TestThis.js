import React from 'react';
import $ from 'jquery';
import {Button} from 'antd';
import style from './public.less';
import './public.less';
const data =[
  {
    title:"1",
    key:"1",
    children:[
      {
        title:"1-1",
        key:"1-1",
        content:"11111",
        desc:"222222",
        name:"张恒",
      },
      {
        title:"1-2",
        key:"1-2",
        content:"333333",
        desc:"44444",
        name:"张恒",
      },
    ]
  },
  {
    title:"2",
    key:"2",
    children:[
      {
        title:"2-1",
        key:"2-1",
        content:"55555",
        desc:"66666",
        name:"张恒",
      },
      {
        title:"2-2",
        key:"2-2",
        content:"77777",
        desc:"88888",
        name:"张恒",
      },
    ]
  },
]
import TestChild from './TestChild';
class TestThis extends React.Component{
    state={
      true:"",
      count:0
    }
  Header=(id,e)=>{
    this.setState({true:id});
    console.log(this.state.true);
    this.setState({true:id},()=>{
      console.log(this.state.true)//

    });
    console.log(id)
   // console.log(this)
    console.log($(this))
    // console.log($(this).parent())
    var dom =e.currentTarget
    console.log(dom);
    console.log(e)
    console.log(e.currentTarget)
    dom.parentNode.classList.add('ss')

  }
  New=(e)=>{
   var  dom = e.currentTarget;
    console.log(dom);
    // console.log(dom.parentNode.classList.add('ss'));
  }
  componentDidMount(){
    // console.log(this)
    this.setState({count:1});
    console.log(this.state.count);
    let dd="";
    this.setState({count:1},()=>{
      console.log(this.state.count)//输出count=1
      dd=this.state.count
      console.log(dd)
    });
  }
  Bottom=(e)=>{
    console.log(e)
    console.log(e.currentTarget);
    var  dom = e.currentTarget;
    console.log(dom);
    console.log(dom.parentNode.parentNode.parentNode.parentNode);

    dom.parentNode.parentNode.parentNode.parentNode.classList.add('NewContain')
  }
  Hidden=(e)=>{
    // console.log(key)
    // console.log(e.currentTarget);
    var  dom = e.currentTarget;
    console.log(dom);
    console.log(dom.parentNode.parentNode.parentNode.parentNode);

    dom.parentNode.parentNode.parentNode.parentNode.classList.remove('NewContain')
  }
  render(){
    return(
      <div className="BoxContainer">
        想jQuery找到当前点击的元素this
        {
          data.map((item,index)=>{
            console.log(111);
            return(
              <div className="contain" key={item.key}>
                <div className="title">
                  <h3>{item.title}</h3>
                 <div>
                   <h3 className="bb" onClick={this.Header.bind(this,item.key)}>请求</h3>
                   <h3 onClick={this.New}>按钮</h3>
                 </div>
                  <span>全部</span>
                </div>
                {
                  item.children.map((item,index)=>{
                    return(
                      <div className="box" key={item.key}>
                        <div className="BottomTitle">
                          <div className={style.BottomTitle}>
                            <span>{item.title}</span>
                            <div>
                              {
                                item.content
                              }
                            </div>
                            <div className={style.bottom}>
                              <span className="cc" onClick={this.Bottom}>显示</span>
                            </div>
                          </div>
                        </div>
                       <div className="BottomName">
                         <div className={style.BottomName}>
                           <span>{item.name}</span>
                           <div>
                             {item.desc}
                           </div>
                           <div className={style.bottom}>
                             <span className="cc" onClick={this.Hidden}>隐藏</span>
                           </div>

                         </div>
                       </div>

                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
        <span>sefsfe</span>

        <div>1</div>
        <div>2</div>
        <div>3</div>


      </div>
    )
  }
}
export default TestThis;
