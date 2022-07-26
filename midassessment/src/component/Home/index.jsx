import 'antd/dist/antd.min.css'
import React, { Component } from 'react'
import Subnav from './Subnav/index'
import Contents from '../../pages/Contents/index'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Subnav/>
        <Contents/>
      </div>
    )
  }
}
