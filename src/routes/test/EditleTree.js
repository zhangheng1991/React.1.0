import React from 'react';

import { Tree,Button } from 'antd';

const { TreeNode } = Tree;
import style from './public.less';
const Defaut=['0-0-0','0-0-1'];
const treeData = [
  {
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

class EditleTree extends React.Component{
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
    show:false,
  }
componentWillMount(){

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
  renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.title} key={item.key} dataRef={item}>
          {this.renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  })
  vertical=()=>{
    this.setState({show:true})
  }
  Horizontal=()=>{
    this.setState({show:false})
  }
  render(){
    // this.selectData(treeData)
    return(
      <div>
        <span>树节点</span>
        <div>
          <Button onClick={this.vertical} type="primary">竖直</Button>
          <Button onClick={this.Horizontal} type="primary">横平</Button>
        </div>
       <div className={(this.state.show==true)?style.EditleTree:""}>
         <Tree
           checkable
           onExpand={this.onExpand}
           expandedKeys={this.state.expandedKeys}
           autoExpandParent={this.state.autoExpandParent}
           onCheck={this.onCheck}
           checkedKeys={this.state.checkedKeys}
           onSelect={this.onSelect}
           selectedKeys={this.state.selectedKeys}
           defaultExpandAll={true}
         >
           {this.renderTreeNodes(treeData)}
         </Tree>
       </div>
      </div>
    )
  }
}

export default EditleTree;
