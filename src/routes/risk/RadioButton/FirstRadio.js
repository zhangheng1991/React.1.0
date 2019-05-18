import React from 'react';
import SecondRadio from './SecondRadio';
class FirstRadio extends React.Component{

  render(){
    const { list}=this.props;
    console.log(list);
    console.log(list);

    return(
      <div>
        {
          list.map((item,index)=>{
            return(
              <SecondRadio item={item} />
            )
          })
        }
      </div>
    )
  }
}
export default FirstRadio;
