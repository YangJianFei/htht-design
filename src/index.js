import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl'
import reducer from './store/reducer'
import { Routers } from './router/main_router'
import Header from './site/template/header'
import 'cesium/Source/Widgets/widgets.css'
import './style/style.scss'
// import './style/htht.scss'
import './style/htht_gis.scss'
import './style/reset.scss'

buildModuleUrl.setBaseUrl('./cesium/')

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Header />
        <Routers />
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
