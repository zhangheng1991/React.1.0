import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import TableForm from './TableForm';
import $ from '../test/jquery';
import jQuery from '../test/jquery';
import '../test/circle-progress';
import '../test/public.less';
// const { Option } = Select;
const { RangePicker } = DatePicker;
const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};

const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '33333',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];
class AdvancedForm extends PureComponent {
  state = {
    width: '100%',
    sddd:""
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  resizeFooterToolbar = () => {
    const sider = document.querySelectorAll('.ant-layout-sider')[0];
    const width = `calc(100% - ${sider.style.width})`;
    if (this.state.width !== width) {
      this.setState({ width });
    }
  };
  render() {
    const { form, dispatch, submitting } = this.props;
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
    const validate = () => {
      validateFieldsAndScroll((error, values) => {
        if (!error) {
          // submit the values
          dispatch({
            type: 'form/submitAdvancedForm',
            payload: values,
          });
        }
      });
    };
    const errors = getFieldsError();
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length;
      if (!errors || errorCount === 0) {
        return null;
      }
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
        if (labelNode) {
          labelNode.scrollIntoView(true);
        }
      };
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null;
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        );
      });
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      );
    };
    return (
      <Card title="成员管理" bordered={false}>
      	<div className="circle_step" state="-1" press_name="circle_step2">
		<div id="circle_step2"><canvas width="155" height="155"></canvas><strong>75.00<i>%</i></strong></div>
		<p>22222</p>
	</div>
        {getFieldDecorator('members', {
          initialValue:tableData,
        })(<TableForm />)}
        <div>
          sgdsdgsdgds
        </div>
      </Card>
    );
  }
}
export default Form.create()(AdvancedForm);

function create_circle(num,val_num){
	if(num==1){
		$('#circle_step'+num).circleProgress({
		    value: 0.98,//你需要展示的值，值从0.0到1.0，默认值为0
		    size: 155,//环形图的大小，单位像素，默认值100
		    startAngle:-1.57,//初始角度，默认值为-Math.PI
		    reverse:false,//是否反向绘制圆弧和动画，默认值为false
		    lineCap:'round',//圆弧的线头样式："butt"、"round"和"square"。默认值为"butt"
		    thickness:20,//进度条圆弧的宽度。默认它自动为size的1/14大小，你可以设置你需要的值。默认值为auto
		    emptyFill:'rgba(0, 0, 0, .1)',//空圆弧的颜色。默认值为"rgba(0, 0, 0, .1)"
		    fill: {
		    	//圆弧填充的配置。
//				-{ color: "#ff1e41" }
//				-{ color: 'rgba(255, 255, 255, .3)' }
//				-{ gradient: ["red", "green", "blue"] }
//				-{ gradient: [["red", .2], ["green", .3], ["blue", .8]] }
//				-{ gradient: [ ... ], gradientAngle: Math.PI / 4 }
//				-{ gradient: [ ... ], gradientDirection: [x0, y0, x1, y1] }
//				-{ image: "http://i.imgur.com/pT0i89v.png" }
//				-{ image: imageInstance }
//				-{ color: "lime", image: "http://i.imgur.com/pT0i89v.png" }
//				默认值为{ gradient: ["#3aeabb", "#fdd250"] }
		        gradient: ["#58FFF6","#4179FF"]
		    }
		}).on('circle-animation-progress', function(event, progress,stepValue) {//当图像正在绘制时的监听事件
		    $(this).find('strong').html(String((stepValue*100).toFixed(2)) + '<i>%</i>');
		});
	}else{
		$('#circle_step'+num).circleProgress({
		    value: val_num,
		    size: 155,
		    startAngle:-1.57,
		    reverse:false,
		    lineCap:'round',
		    thickness:20,
		    fill: {
		        gradient: ["#46ccf2","#4696ef"]
		    }
		}).on('circle-animation-progress', function(event, progress,stepValue) {
		    $(this).find('strong').html(String((stepValue*100).toFixed(2)) + '<i>%</i>');
		});
	}
}