/**
 * Created by think on 2018/8/10.
 */
import React from 'react';
import   'antd/dist/antd.css';
import Header from '../../components/public/Header';
import style from  '../../components/public/public.less';
import Bottom from '../../components/public/Bottom';
class Mananger extends React.Component{
  state={
    keyId:'index'

  }
  componentWillMount(){
    console.log(this.props.location.pathname)
    console.log(this.props.location.query.pathname)
  }
   render(){
     return(
       <div>
            <Header button={style.indexbutton} pathName={this.props.location.pathname} code={this.props.location.query.code}/>
         <div className={style.container}>
           {   this.props.children }
         </div>
            <Bottom />
       </div>
     )
   }
}
export default Mananger
