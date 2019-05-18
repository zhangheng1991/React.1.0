import React from 'react';
import ForEachList from './ForEachLast';
class ForEachData extends React.Component{

  render(){
    const {list }=this.props;
    console.log(list);
    return(
      <div>
        {
          list.map((item,index)=>{
            return(
              <ForEachList item={item} />
            )
          })
        }
      </div>
    )
  }
}

export default ForEachData;
