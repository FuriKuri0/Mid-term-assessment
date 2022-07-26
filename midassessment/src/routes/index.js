import Contents from '../pages/Home/Contents/index.jsx'
import Home from '../pages/Home/index.jsx'
import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'
import Register from '../pages/register'
import '../pages/Home/index.css'
import MySoftware from '../pages/MySoftware/index.jsx'

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
        path:'Home',
        element:<Home/>,
        children:[
            {
                path:'Contents',
                element:<Contents/>
            },
            {
                path:'',
                element:<Contents/>
            }
        ]
    },
    {
        path:'MySoftware',
        element:<MySoftware/>
    }
]
export default routes
