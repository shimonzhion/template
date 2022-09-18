import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {} from "./store/reducers"
import App from './App'
import './index.css'
import combineReducers from "../src/store/reducers"
// const store = createStore(combineReducers,{})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
)
