/**
 * Created by zhangheng on 2019/4/3.
 */
import React from 'react';
import Echart from 'echarts';
import style from './Lines.less';
import { Col } from 'antd';
class Lines extends React.Component{
  componentDidMount(){
    this.echart()
    this.echarts()
    this.epie()
    this.eBar()
  }
  echarts(){
    var MyChart =Echart.init(document.getElementById("container"))
    MyChart.setOption({
      title: {
        text: '折线图堆叠',
        backgroundColor:"red",
        textStyle:{
          color:"white",
          fontSize:"28px"
        },
        subtext:"副标题",
        subtextStyle:{
          color:"black",
          fontSize:"20px",

        }
      },
      backgroundColor:"red",
      tooltip: {
        trigger: 'axis',
        color:"glod",

      },
      legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
        itemWidth:16,
        // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        itemHeight:16,    //图例标记的图形高度。
        itemGap:40,       //图例标记的图形宽度。
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },

      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        axisLine:{
          show:true,
          lineStyle:{
            color:"black"
          }
        },
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisTick:{
          show:true,
          color:"white",
          lineStyle:{
            width:10,
            color:"white"
          }
        },

      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle:{
            color:"black",
            width:10,
            opacity:0.5
          }
        },
        axisLine:{
          show:true,
          lineStyle:{
            color:"yellow"
          }
        },
        axisTick:{
          show:true,
          color:"white",
          lineStyle:{
            width:10,
            color:"white"
          }
        },
      },
      series: [

        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'直接访问',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'搜索引擎',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    })
  }
  echart(){

    var MyCharts =Echart.init(document.getElementById("main"))
    MyCharts.setOption({

      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        trigger: 'axis',
        axisPointer:{
          animation:true,
        }
      },
      animation: false,
      legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
        {
          name:'访问来源',
          type:'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ]
        }
      ]
    })
  }
  epie(){
    var MyPie =Echart.init(document.getElementById("pie"))
    MyPie.setOption({
      backgroundColor: 'white',
      title: {
        text: '',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
        itemWidth:16,
        // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        itemHeight:16,    //图例标记的图形高度。
        itemGap:10,       //图例标记的图形宽度。
      },
      tooltip : {
        show:true,
        trigger: 'item',
        formatter: "{a} <br/>数量(百分比) : {c} ({d}%)",
        showDelay:0,
        textStyle:{
          color:"red",
          fontSize:20,
          opacity:0.5
        }
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name:'访问来源',
          type:'pie',
          radius : '80%',
          center: ['50%', '50%'],
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:274, name:'联盟广告'},
            {value:235, name:'视频广告'},
            {value:400, name:'搜索引擎'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            show:false,
            normal: {
              show:true,
              position:"inside",
              textStyle: {
                color: 'white',
                fontSize:20,
                align:"center",
                // backgroundColor:"red"
              }
            }
          },
          labelLine: {
            show:false,
            normal: {
              show:false,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0,
              length:10,
              length2:50,
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              width:240,
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    })
  }
 eBar(){
   var MyBar =Echart.init(document.getElementById("bar"))
   MyBar.setOption({
     color: ['#3398DB'],
     tooltip : {
       trigger: 'axis',
       axisPointer : {            // 坐标轴指示器，坐标轴触发有效
         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
       }
     },
     legend: {
       data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
       itemWidth:16,
       // 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
       itemHeight:16,    //图例标记的图形高度。
       itemGap:10,       //图例标记的图形宽度。
     },
     grid: {
       left: '3%',
       right: '4%',
       bottom: '3%',
       containLabel: true
     },
     xAxis : [
       {
         type : 'category',
         data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
         axisTick: {
           alignWithLabel: true
         }
       }
     ],
     yAxis : [
       {
         type : 'value'
       }
     ],
     series : [
       {
         name:'直接访问',
         type:'bar',
         barWidth: '60%',
         data:[10, 52, 200, 334, 390, 330, 220],
         itemStyle: {
           normal: {
             color: new Echart.graphic.LinearGradient(
               0, 0, 0, 1,
               [
                 {offset: 0, color: '#83bff6'},
                 {offset: 0.5, color: '#188df0'},
                 {offset: 1, color: '#188df0'}
               ]
             )
           },
           emphasis: {
             color: new Echart.graphic.LinearGradient(
               0, 0, 0, 1,
               [
                 {offset: 0, color: '#2378f7'},
                 {offset: 0.2, color: '#2378f7'},
                 {offset: 1, color: '#33bff6'}
               ]
             )
           }
         },
       }
     ]
   })
}
  render(){
    return(

      <div>
        <div className={style.Lines}></div>
        <div className={`${style["Liness"]} ${style["Line"]}`}></div>
        <div id="container" style={{height:"300px"}}></div>
        <div id="main" style={{height:"400px"}}></div>
        <div id="pie" style={{height:"400px"}}></div>
        <div id="bar" style={{height:"400px"}}></div>

        <Col span="12">

        </Col>
        <Col  span="12">

        </Col>
      </div>
    )
  }
}
export default Lines;
