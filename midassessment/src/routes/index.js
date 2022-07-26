import Contents from '../pages/Home/Contents/index'
import '../pages/Home/index.css'
import { Navigate } from 'react-router-dom'

export default [
    {
        // 主页子导航栏内容
        path:'/Contents',
        element:<Contents/>
    },
    {
        // 主页子导航栏没有点击路由链接之前
        path:'/',
        element:<Navigate to="Contents"/>
    }
]