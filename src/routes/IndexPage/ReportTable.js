import React from 'react';
import { Form, Input, Row, Col,Button, Select,Modal, Popover,Table,Col  } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
class ReportTable extends React.Component{
  render(){
    return(
      <div>
        <Col span={24}>
          <Col span={4}>
            <Col span={4}>
              风险类型
            </Col>
            <Col span={20}>
              <Select   onChange={this.handleChangDep}  >
                <Option value="风险管理部">风险管理部</Option>
                <Option value="经纪及财富管理部">经纪及财富管理部</Option>
                <Option value="固定收益部">固定收益部</Option>
                <Option value="证券投资部">证券投资部</Option>
                <Option value="金融创新部">金融创新部</Option>
                <Option value="资金运营部">资金运营部</Option>
                <Option value="融资融券部">融资融券部</Option>
                <Option value="网络金融部">网络金融部</Option>
                <Option value="金融产品部">金融产品部</Option>
                <Option value="资金运营部">资金运营部</Option>
                <Option value="销售交易部">销售交易部</Option>
                <Option value="资产托管部">资产托管部</Option>
                <Option value="债务融资部">债务融资部</Option>
              </Select>
            </Col>
          </Col>
        </Col>
      </div>
    )
  }
}
export default ReportTable;
