/**
 * Created by think on 2018/8/26.
 */
import React from 'react';
import { Col,Row } from 'antd';
import style from './public.less';
class Bottom extends React.Component{
  render(){
    return(
      <div className={style.Bottom}>
         <div className={style.BottomContainer}>
           <Col span="6">
             <h2>关于我们</h2>
             <Col span="12">关于我们</Col>
             <Col span="12">帮助中心</Col>
             <Col span="12">加入我们</Col>
             <Col span="12">标签集</Col>
             <Col span="12">加入我们</Col>
             <Col span="12">免责声明</Col>
             <Col span="12">商务我们</Col>
           </Col>
           <Col span="6">
             <h2>关于我们</h2>
             <Col span="12">新浪微博</Col>
             <Col span="12">微信</Col>

           </Col>
           <Col span="6">
             <h2>关于我们</h2>
             <Col span="12">关于我们</Col>
             <Col span="12">帮助中心</Col>
             <Col span="12">加入我们</Col>
             <Col span="12">标签集</Col>
             <Col span="12">加入我们</Col>
             <Col span="12">免责声明</Col>
             <Col span="12">商务我们</Col>
           </Col>
           <Col span="6" style={{textAlign:"center"}}>
             <div className={style.BottomPhoto}>

             </div>
             <Col span="24" >扫描二维码</Col>
             <Col span="24">下载优可宝宝客户端</Col>

           </Col>
         </div>
        <div className={style.BottomBox}>
          Copyright @ 2018 优可宝宝 ALL right Reserved
        </div>

      </div>
    )
  }
}
export default Bottom;
