/**
 * Created by zhangheng on 2019/4/3.
 */
import React from 'react';
import HighCharts from 'highcharts';
class HLines extends React.Component{
  componentDidMount(){
    this.high()
    this.highs()
  }
  high(){
    if(!document.getElementById("contor")){
      return
    }
    // var MyHigh =document.getElementById("contor")
    HighCharts.chart('contor', {
      chart: {
        type: 'area'
      },
      title: {
        text: '全球各大洲人口增长历史及预测'
      },
      subtitle: {
        text: '数据来源: Wikipedia.org'
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: '十亿'
        },
        labels: {
          formatter: function () {
            return this.value / 1000;
          }
        }
      },
      tooltip: {
        split: true,
        valueSuffix: ' 百万'
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [{
        name: '亚洲',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
        name: '非洲',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: '欧洲',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: '美洲',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: '大洋洲',
        data: [2, 2, 2, 6, 13, 30, 46]
      }]
    });
  }
  highs(){
    if(!document.getElementById("container")){
      return
    }
    HighCharts.chart('container',{
      chart: {
        type: 'column'
      },
      title: {
        text: '月平均降雨量'
      },
      subtitle: {
        text: '数据来源: WorldClimate.com'
      },
      xAxis: {
        categories: [
          '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: '降雨量 (mm)'
        }
      },
      tooltip: {
        // head + 每个 point + footer 拼接成完整的 table
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          borderWidth: 0
        }
      },
      series: [{
        name: '东京',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: '纽约',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      }, {
        name: '伦敦',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      }, {
        name: '柏林',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
      }]
    });
  }
  render(){
    return(
      <div>

       <div id="contor" style={{height:"400px"}}></div>
        <div id="container" style={{height:"400px"}}></div>
      </div>
    )
  }
}
export default HLines;
