/**
 * Created by zhangheng on 2019/3/15.
 */
import React from 'react';
import style from './Fiexd.less';
import { Select,Table } from 'antd';

const Option = Select.Option;
import { Tree } from 'antd';

const { TreeNode } = Tree;
const data=[
  {
    title:"1",
    key:"1",
    children:[
      {
        title:"1-1",
        key:"1-1",
      },
      {
        title:"1-2",
        key:"1-2",
      }
      ,
      {
        title:"1-3",
        key:"1-3",
        children:[
          {
            title:"1-3-1",
            key:"1-3-1",
          },
          {
            title:"1-3-2",
            key:"1-3-2",
          }
          ,
          {
            title:"1-3-3",
            key:"1-3-3",
          }
        ]
      }
    ]
  },
  ,
  {
    title:"2",
    key:"2",
    children:[
      {
        title:"2-1",
        key:"2-1",
      },
      {
        title:"2-2",
        key:"2-2",
      }
      ,
      {
        title:"2-3",
        key:"2-3",
      }
    ]
  }
]
var obj = {dd:"e",a:'a',c:"de"};
var obj1 = {b:'b'};
var obj2 = {a:'a',c:"de",dd:"e"};

const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];


class Fiexd extends React.Component{
  componentWillMount(){
     var cont=document.getElementById("content");
     console.log('innerText cont= '+ cont.innerText);
     console.log('innerHtml cont= '+ cont.innerHTML);
    var ID=document.getElementById('dd');

    // console.log(document.getElementsByClassName('dd'));
    console.log(document.getElementById('dd'));
    for(var name in this.datas){
      console.log(this.datas[name]);
    }

    for(var j = 0,len = this.datas.length; j < len; j++){
      console.log(this.datas[j]);
    }

    // 先把对象转化成字符串
    // console.log(JSON.stringify(obj));
    // console.log(JSON.stringify(obj1));
    // console.log(JSON.stringify(obj2));
    // console.log(JSON.stringify(obj) == JSON.stringify(obj1));
    // console.log(JSON.stringify(obj) == JSON.stringify(obj2));
    // var o = {a:1,b:2,c:3,d:4};
    // for(var name in o){
    //   console.log(name + ':' + o[name]);
    // }
    var arr = [1,2,0,3,9];
    for( let i of arr){
      console.log(i);
    }
    var sttr="werwerwerwerwer";
    for( let i of sttr){
      console.log(i);
    }
    var num =1234567890;
    // for( let i of num){
    //   console.log(i);
    // }
  }
  handleChange=(value)=> {
  console.log(`selected ${value}`);
}

  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <div title={item.title} key={item.key}>
          {this.renderTreeNodes(item.children)}
        </div>
      );

    }
    return <div >
      <input name="Fruit" type="radio" value="" />
      {item.title}
    </div>;

  })
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  }

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }

  // renderTreeNodes = data => data.map((item) => {
  //   if (item.children) {
  //     return (
  //       <TreeNode title={item.title} key={item.key} dataRef={item}>
  //         {this.renderTreeNodes(item.children)}
  //       </TreeNode>
  //     );
  //   }
  //   return <TreeNode {...item} />;
  // })
  datas=[

    {title:"1",key:"1"},
    {title:"2",key:"12"},

  ]
  render(){
    return(
      <div >
        1 <span id="content">‘我是span标签的内容’</span>
        <div id="dd">
          ddd
          {
            this.datas.map((item)=>{
              console.log(item)
              return(
                <div key={item.key}>
                  <span>{item.title}</span>
                </div>
              )
            })
          }
        </div>

        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      <div>
        <Select  placeholder="Select users" defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        {/*SDFSDFSDFSDF*/}
        {
          this.renderTreeNodes(data)
        }
        <div className={style.Parent}>
          <div className={style.Child}>

          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Fiexd;
