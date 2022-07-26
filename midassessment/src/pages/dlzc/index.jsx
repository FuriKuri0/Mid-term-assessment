import React from 'react'
import img from './index.png'
import './index.css'
import { NavLink, Outlet, Link } from 'react-router-dom'
export default function Dlzc() {
    return (
        <div>
            <div className='dlzc-text'>欢迎使用软件管理平台</div>
            <img className='dlzc-leftImg' src={img} alt="" />
            <div className='dlzc-box'>
                <NavLink className='dlzc-nameLogin' to='namel'>用户名登录</NavLink>
                <NavLink className='dlzc-mailLoign' to='emaill'>邮箱登录</NavLink>
                <div className='dlzc-line'></div>
                <div className='dlzc-nameMain'></div>
            </div>
            <Outlet />
            <Link className='dlzc-registerBtn' to='register'>register now!</Link>

        </div>
    )
}
