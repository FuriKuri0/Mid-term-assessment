import React from 'react'
import img from './index.png'
import './index.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Register from '../register'
import { CloseOutlined } from '@ant-design/icons'

export default function Dlzc() {
    const location = useLocation();
    const [show, setShow] = React.useState(0);
    const [state, setState] = React.useState('none');
    React.useEffect(() => {
        console.log(location.state);
        if (location.state !== null && location.state.a !== 2) {
            setState('block');
            setShow(1);
        }

    }, location.state)
    // if (useLocation().state) {
    //     setState('block');
    //     setShow(1);
    // }
    // setTimeout(console.log(useLocation()), 5000);
    const cancel = () => {
        setShow(0);
        setState('none');
    }

    return (
        <div>
            <div className='dlzc-mask' style={{ display: state }}></div>
            <div className='dlzc-text'>欢迎使用软件管理平台</div>
            <img className='dlzc-leftImg' src={img} alt="" />
            <div className='dlzc-box'>
                <NavLink className='dlzc-nameLogin' to='namel'>用户名登录</NavLink>
                <NavLink className='dlzc-mailLoign' to='emaill'>邮箱登录</NavLink>
                <div className='dlzc-line'></div>
                <div className='dlzc-nameMain'><Outlet /></div>

            </div>
            <div>{show ? <div className='dlzc-register'>
                <div className='dlzc-registerName'>用户注册
                    <button onClick={cancel} className='dlzc-cancelBtn' style={{ background: '#3D6DB5', border: 'none' }}><CloseOutlined /></button>
                </div><div className='dlzc-fix'><Register /></div></div> : ''}</div>
        </div>
    )
}
