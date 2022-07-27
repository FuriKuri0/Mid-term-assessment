import React, { Component } from 'react'
import img from "./images/CATIA.jpg"
import './index.css' 
// import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import VersionInfo from '../versioninfo'

export default function MySoftware() {

  // const navigate=useNavigate()

  // function showDetail(){
  //   navigate('versionInfo')
  // }

    return (
      <div className="mySoftware">
          <h1 className="mySoftware-content-head">我的软件</h1>
          <div className="mySoftware-content-body">
            <Link to="versioninfo">
              <div className="mySoftware-info">
                <img src={img} alt="CATIA" width={100}/>
                <div className="text">
                  <h2>CATIA</h2>
                  <p>{'\u00A0'}研发设计<br /><br/>这是最好的研发工具了 快快来加入我们吧！！！</p>
                </div>
              </div>
            </Link>
          </div>
      </div>
    )
}
