import Contents from '../pages/home/contents/index.jsx'
import Home from '../pages/home/index.jsx'
import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'
import Register from '../pages/register'
import '../pages/home/index.css'
import MySoftware from '../pages/mysoftware/index.jsx'
import VersionInfo from '../pages/versioninfo/index.jsx'

const routes = [
    {
        path: '/dlzc',
        element: <Dlzc />,
        children: [
            {
                path: 'namel',
                element:<Namel/>,
            },
            {
                path: 'emaill',
                element:<Emaill/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: '',
                element: <Navigate to='namel' />
            }
        ]
    },
    {
        // 主页子导航栏内容
        path:'home',
        element:<Home/>,
        children:[
            {
                path:'contents',
                element:<Contents/>
            },
            {
                path:'',
                element:<Contents/>
            }
        ]
    },
    {
        path:'mysoftware',
        element:<MySoftware/>,
        children:[
            {
                path:'versioninfo',
                element:<VersionInfo/>
            }
        ]
    },
]
export default routes
