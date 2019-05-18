/**
 * Created by K0410007 on 2018/6/4.
 */
import * as view from './ViewsCommon';
// import RadioButton from "../routes/risk/RadioButton/RadioButton";
export function IndexPage(app){
  return ({
    path: '/',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/IndexPage') })
      }, 'IndexPage')
    },
  });
}

export function Index(app){
  return ({
    path: 'index',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/Index') })
      }, 'index')
    },
  });
}
export function Risk(app){
  return ({
    path: 'Risk',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/Risk') })
      }, 'Risk')
    },
  });
}

export function Test(app){
  return ({
    path: 'Test',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/Test') })
      }, 'Test')
    },
  });
}
export function EditleTable(app){
  return ({
    path: 'EditleTable',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/test/EditleTable') })
      }, 'EditleTable')
    },
  });
}
export function EditleTree(app){
  return ({
    path: 'EditleTree',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/test/EditleTree') })
      }, 'EditleTree')
    },
  });
}
export function ForEach(app){
  return ({
    path: 'ForEach',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/ForEach/ForEach') })
      }, 'ForEach')
    },
  });
}
export function RadioButton(app){
  return ({
    path: 'RadioButton',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/RadioButton/RadioButton') })
      }, 'RadioButton')
    },
  });
}

export function ElasticLayout(app){
  return ({
    path: 'ElasticLayout',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/ElasticLayout/ElasticLayout') })
      }, 'ElasticLayout')
    },

  });
}

export function TestThis(app){
  return ({
    path: 'TestThis',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/TestThis/TestThis') })
      }, 'TestThis')
    },
  });
}
export function VeiwMore(app){
  return ({
    path: 'VeiwMore',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/VeiwMore/VeiwMore') })
      }, 'VeiwMore')
    },
  });
}
export function Fiexd(app){
  return ({
    path: 'Fiexd',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/fiexd/Fiexd') })
      }, 'Fiexd')
    },
  });
}
export function Form(app){
  return ({
    path: 'Form',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/risk/Form/Fomr') })
      }, 'Form')
    },
  });
}
export function Date(app){
  return ({
    path: 'Date',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Date/Date') })
      }, 'Date')
    },
  });
}
export function Dates(app){
  return ({
    path: 'Dates',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Date/Dates') })
      }, 'Dates')
    },
  });
}

export function TableTest(app){
  return ({
    path: 'TableTest',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Date/TableTest') })
      }, 'TableTest')
    },
  });
}
export function Lines(app){
  return ({
    path: 'Lines',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Echarts/Lines') })
      }, 'Lines')
    },
  });
}
export function HLines(app){
  return ({
    path: 'HLines',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Highcharts/HLines') })
      }, 'HLines')
    },
  });
}
export function ButtonStyle(app){
  return ({
    path: 'ButtonStyle',
    getIndexRoute (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, { component: require('../routes/Button/ButtonStyle') })
      }, 'ButtonStyle')
    },
  });
}

// FiexdTableTestButtonStyle
