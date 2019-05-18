import React from 'react';
import style from './VeiwMore.less';
import {Upload, message, Button, Icon,Table,Input} from 'antd';
const data=[
  {
    name:"业务线",
    id:"lines",
    children:[
      {
        id:"all",
        name:"全部"
      },
      {
        id:"证券期货经纪业务",
        name:"证券期货经纪业务"
      },
      {
        id:"融资类业务",
        name:"融资类业务"
      },
      {
        id:"金融产品业务",
        name:"金融产品业务"
      },
      {
        id:"投资银行业务",
        name:"投资银行业务"
      },
      {
        id:"投资交易业务",
        name:"投资交易业务"
      },
      {
        id:"研究与机构销售业务",
        name:"研究与机构销售业务"
      },
      {
        id:"托管业务",
        name:"托管业务"
      },
      {
        id:"场外交易所平台业务",
        name:"场外交易所平台业务"
      },
      {
        id:"资产管理业务",
        name:"资产管理业务"
      },
      {
        id:"私募股权基金管理业务",
        name:"私募股权基金管理业务"
      },
      {
        id:"另类投资业务",
        name:"另类投资业务"
      },
      {
        id:"其他",
        name:"其他"
      },
    ]
  },
  {
    name:"风险类型",
    id:"risk",
    children:[
      {
        id:"all",
        name:"全部"
      },
      {
        id:"市场风险",
        name:"市场风险"
      },
      {
        id:"信用风险",
        name:"信用风险"
      },
      {
        id:"操作风险",
        name:"操作风险"
      },
      {
        id:"资本管理",
        name:"资本管理"
      },
      {
        id:"法律风险",
        name:"法律风险"
      },
      {
        id:"合规风险",
        name:"合规风险"
      }, {
        id:"声誉风险",
        name:"声誉风险"
      }, {
        id:"信息技术风险",
        name:"信息技术风险"
      },
      {
        id:"廉洁风险",
        name:"廉洁风险"
      }, {
        id:"其他",
        name:"其他"
      } ,{
        id:"市场风险1",
        name:"市场风险1"
      },
      {
        id:"信用风险1",
        name:"信用风险1"
      },
      {
        id:"操作风险1",
        name:"操作风险1"
      },
    ]
  },
  {
    name:"数据来源",
    id:"data",
    children:[
      {
        id:"all",
        name:"全部"
      },
      {
        id:"集团",
        name:"集团"
      },
      {
        id:"华泰证券",
        name:"华泰证券"
      },
      {
        id:"华泰联合证券",
        name:"华泰联合证券"
      },
      {
        id:"华泰资管",
        name:"华泰资管"
      },
      {
        id:"华泰紫金投资",
        name:"华泰紫金投资"
      },
      {
        id:"华泰创新投资",
        name:"华泰创新投资"
      },
      {
        id:"华泰期货",
        name:"华泰期货"
      },
      {
        id:"华泰金控（香港）",
        name:"华泰金控（香港）"
      },
      {
        id:"股权交易中心",
        name:"股权交易中心"
      },
    ]
  }
]
const columns = [
  {
    title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',
  },
  {
    title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left',
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">action</a>,
  },
];

const datas = [
  {
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 40,
  address: 'London Park',
}];
class VeiwMore extends React.Component{
  state={
    show:"1"
  }

  //查看更多
  More=(id,e)=>{
    // console.log(e)
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.parentNode.previousSibling);
    var parnetDom =e.currentTarget.parentNode;
    parnetDom.parentNode.classList.add('OpenButton')
    var dom=e.currentTarget.parentNode.previousSibling;
    dom.style.height="auto";
  }
  //收起
Pack=(id,e)=>{
  // console.log(e)
  // console.log(e.currentTarget);
  // console.log(e.currentTarget.parentNode.previousSibling);
  var parnetDom =e.currentTarget.parentNode;
  parnetDom.parentNode.classList.remove('OpenButton')
  var dom=e.currentTarget.parentNode.previousSibling;
  dom.style.height="35px";
}
  Add=(id,e)=>{
    //console.log(id)
    var dom=e.currentTarget.parentNode.childNodes;
    console.log(dom)
    dom.forEach((item,index)=>{
      //console.log(item)
     item.classList.remove('active');
    })
    // dom.classList.remove('active');
   // console.log(e.currentTarget);
    var parnetDom =e.currentTarget;
    parnetDom.classList.add('active')

  }
  Reset=(e)=>{
    // console.log(e);
    // console.log((e.currentTarget.parentNode.parentNode.parentNode.parentNode.lastChild.childNodes));
    var dom=e.currentTarget.parentNode.parentNode.parentNode.parentNode.lastChild.childNodes;
    console.log(dom)
    dom.forEach((item,index)=>{
      // console.log(item)
      // console.log(item.childNodes);
      item.childNodes.forEach((item,index)=>{
        //console.log(item.childNodes[1].childNodes);
        item.childNodes[1].childNodes.forEach((item,index)=>{
         console.log(item)
         console.log(item.textContent)
            if(item.textContent === "全部"){
              item.classList.add('active');
              console.log(1111)
            }else{
              item.classList.remove('active');
             // console.log(2222)
            }
          //console.log(3333)
          // item.childNodes.forEach((item,index)=>{
          //    console.log(item)
          //   item.classList.remove('active');
          //   if(item.id== "all"){
          //     item.classList.add('active');
          //   }

          // })
        })
      })

      // item.classList.remove('active');
    })
}
  render(){
   // console.log(this.state.show)
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return(
      <div className={style.ViewMore}>
        <h1>查看更多</h1>
        <div>
          <div className={style.ViewBox}>
            <div>
              <h3 >所有分类</h3>
            </div>
            <div className="MoreSpan">
              <span   onClick={this.Reset}>重置</span>
            </div>
          </div>
        </div>
        <div>
          {
            data.map((item,index)=>{
             // console.log(item.children.length)
              return(
                <div>
                     <div className={style.ViewBox}>
                       <div>
                         <h3 >{item.name}</h3>
                       </div>
                       <div className="MoreSpan">
                           {
                             item.children.map((item,index)=>{
                               console.log(index)
                               return(
                                 <span className={item.id=="all"?"active":""}  onClick={this.Add.bind(this,item.id)} key={item.id}>{item.name}</span>
                               )
                             })
                           }
                         </div>
                       {
                         (item.children.length>11)&&(
                           <div className="BoxButton">
                             <button className="MoreButton" onClick={this.More.bind(this,item.id)}>更多</button>
                             {/*<Icon type="down" />*/}
                             {/*<Icon type="up" />*/}
                             <button className="PackButton" onClick={this.Pack.bind(this,item.id)}>收起</button>
                           </div>
                         )
                       }

                     </div>
                </div>
              )
            })
          }
        </div>
        {/*<Upload {...props}>*/}
          {/*<Button>*/}
            {/*<Icon type="upload" /> Click to Upload*/}
          {/*</Button>*/}
        {/*</Upload>*/}
        {/*<Table columns={columns} dataSource={datas} scroll={{ x: 3000 }} />*/}
       {/*<Input />*/}
      </div>
    )
  }
}
export default VeiwMore;
