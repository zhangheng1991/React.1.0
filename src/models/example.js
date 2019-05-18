/**
 * Created by think on 2018/4/22.
 */
import {routerRedux} from  'dva/router';
export default {
  namespace:"BlankedModeles",
  state:{
    TargetChart:{},
    fourceModal:false,
    BlankModal:false,
    BlankFormModal:false,
    taskData:[],
    itemRisk:{},
    TsetModal:false,
    TestData:{},
    FormData:{},
    ListData:[],
    time:true,
  },
  effects: {
    *ListBlank({ payload }, { call, put }) {  // eslint-disable-line
      yield put(routerRedux.push('/index'));
    },
  },

  reducers: {

    save(state, action) {
      console.log(33333)
      return { ...state, ...action.payload };
    },
  },
}
