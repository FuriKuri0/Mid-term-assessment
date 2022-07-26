import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import img from "./images/CATIA.jpg"

export default class Contents extends Component {
  render() {
    return (
        // 主页内容部分
        <div className="home-content">
          <div className="home-content-head">信息管理</div>
          <div className="home-content-body">
          <a href="">
            <div className="home-info">
              <img src={img} alt="CATIA" width={100}/>
              <div className="text">
                <h2>CATIA</h2>
                <p>{'\u00A0'}研发设计<br /><br/>这是最好的研发工具了 快快来加入我们吧！！！</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="home-info">
              <img src={img} alt="CATIA" width={100}/>
              <div className="text">
                <h2>CATIA</h2>
                <p>{'\u00A0'}研发设计<br /><br/>这是最好的研发工具了 快快来加入我们吧！！！</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="home-info">
              <img src={img} alt="CATIA" width={100}/>
              <div className="text">
                <h2>CATIA</h2>
                <p>{'\u00A0'}研发设计<br /><br/>这是最好的研发工具了 快快来加入我们吧！！！</p>
              </div>
            </div>
          </a>
          <a href="">
            <div className="home-info">
              <img src={img} alt="CATIA" width={100}/>
              <div className="text">
                <h2>CATIA</h2>
                <p>{'\u00A0'}研发设计<br /><br/>这是最好的研发工具了 快快来加入我们吧！！！</p>
              </div>
            </div>
          </a>
        </