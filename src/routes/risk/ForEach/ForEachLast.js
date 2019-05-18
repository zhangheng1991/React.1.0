import React from 'react';
import style from './public.less';
import './public.less';
class ForEachLast extends React.Component{
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
    const { item }=this.props;
    console.log(item)
    var classString="CycleAccording";
    if(this.state.show){
      classString=classString + " daily-show";
    }
    return(
      <div>

              <div className={classString} key={item.key}>
                <div  className="CyclePositive">
                  <h3>{item.title}</h3>
                  <div>
                    {item.desc}
                  </div>
                  <div className={style.CycleBottom}>
                    <span onClick={this.show.bind(this,item.key)}>显示</span>
                  </div>
                </div>
                <div className="CycleReverse">
                        <div>
                          <h3>{item.name}</h3>
                          <div>
                            {item.content}
                          </div>
                          <div className={style.CycleBottom}>
                            <span onClick={this.hidden.bind(this,item.parent)}>隐藏</span>
                          </div>
                        </div>
                </div>
              </div>
 
      </div>
    )
  }
}
export default ForEachLast;
