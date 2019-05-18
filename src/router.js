import React from 'react';
import { Router, Route } from 'dva/router';
import PropTypes from 'prop-types';
import * as systemView from './services/SystemCommom';
import IndexPage from './routes/IndexPage';
import EditleTable from "./routes/test/EditleTable";
import EditleTree from "./routes/test/EditleTree";
import RadioButton from "./routes/risk/RadioButton/RadioButton";
import ElasticLayout from "./routes/ElasticLayout/ElasticLayout";
import TestThis from "./routes/risk/TestThis/TestThis";
import VeiwMore from "./routes/risk/VeiwMore/VeiwMore";
import  Fiexd from './routes/fiexd/Fiexd';
const Routers = function ({ history, app }) {
  const routes = [
    systemView.IndexPage(app),
    {
      path: '/',
      getComponent (nextState, cb) {
        require.ensure([], (require) => {
          cb(null,  require('./routes/mananger/Mananger'))
        }, 'IndexPage')
      },
      childRoutes: [
        systemView.Index(app),
        systemView.Risk(app),
        systemView.Test(app),
        systemView.EditleTable(app),
        systemView.EditleTree(app),
        systemView.ForEach(app),
        systemView.RadioButton(app),
        systemView.ElasticLayout(app),
        systemView.TestThis(app),
        systemView.VeiwMore(app),
        systemView.Fiexd(app),
        systemView.Form(app),
        systemView.Date(app),
        systemView.Dates(app),
        systemView.TableTest(app),
        systemView.Lines(app),
        systemView.HLines(app),
        systemView.ButtonStyle(app),

        {
          getComponent (nextState, cb) {
            require.ensure([], (require) => {
              cb(null,  require('./routes/mananger/Mananger'))
            }, '')
          },
          childRoutes: [
            // systemView.RiskMonitoring(app),
          ],
        }
      ],
    },

  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
