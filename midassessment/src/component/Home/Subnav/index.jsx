import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'
import { Button} from 'antd';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Subnav extends Component {
  render() {
    return (
      <div className="home-subnav">
          <ul className="home-subnav-left">
            <li><Link to="/Contents/all">全部</Link></li>
            <li><Link to="/Contents/infoManage">信息管理</Link></li>
            <li><Link to="/Contents/rdDesign">研发设计</Link></li>
            <li><Link to="/Contents/productControl">生产控制</Link></li>
            <li><Link to="/Contents/Firmware">嵌入式软件</Link></li>
          </ul>
          <div className="home-subnav-right">
            <input type="text" placeholder='搜索'/>
            <Button shape="circle" icon={<SearchOutlined />} />
          </div>
        </div>
    )
  }
}
