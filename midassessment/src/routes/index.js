import Contents from '../pages/home/contents/index.jsx'
import Home from '../pages/home/index.jsx'
import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'
import Register from '../pages/register'
import Softwaredetail from '../pages/softwaredetail'
import Softwaremsg from '../pages/softwaremsg'
import Versionimf from '../pages/versionimf'
import Licensing from '../pages/licensing'
import Personalcen from '../pages/personalcen'
import Mysoftware from '../pages/mysoftware'
import Myauthorization from '../pages/myauthorization'
import Personalinf from '../pages/personalinf'
import Fingerprint from '../pages/fingerprint'
import '../pages/home/index.css'
import MySoftware from '../pages/mysoftware/index.jsx'
import Repairpsw from '../pages/repairpsw/index.jsx'
import Management from '../pages/management/index.jsx'
const routes = [
    //登录注册
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
    //软件详情
    {
        path: '/softwaredetail',
        element:<Softwaredetail/>,
        children: [
            {
                path: 'softwaremsg',
                element:<Softwaremsg/>
            },
            {
                path: 'versionimf',
                element:<Versionimf/>
            },
            {
                path: 'licensing',
                element:<Licensing/>
            },
            {
                path: '',
                element: <Navigate to='softwaremsg' />
            }
         ]
    },
    //个人信息
    {
        path: '/personalcen',
        element:<Personalcen/>,
        children: [
            {
                path: 'mysoftware',
                element:<Mysoftware/>
            },
            {
                path: 'myauthorization',
                element:<Myauthorization/>
            },
            {
                path: 'personalinf',
                element:<Personalinf/>
            },
            {
                path: 'fingerprint',
                element:<Fingerprint/>
            },
            {
                path: 'repairpsw',
                element:<Repairpsw/>
            },
            {
                path: '',
                element: <Navigate to='mysoftware' />
            }
         ]
    },
    //默认
    {
        // 主页子导航栏内容
        path:'home',
        element:<Home/>,
        children:[
            {
                path:'contents',
                element:<Contents/>
            },
            // {
            //     path:'infoMange',
            //     element:<InfoMange/>
            // },
            // {
            //     path:'rdDesign',
            //     element:<RdDesign/>
            // },
            // {
            //     path:'productControl',
            //     element:<ProductControl/>
            // },
            // {
            //     path:'firmware',
            //     element:<Firmware/>
            // }
            {
                path: '',
                element: <Navigate to='contents' />
            }
        ]
    },
    //我的软件
    {
        path:'/mysoftware',
        element:<MySoftware/>,
    },
    //软件详情
    {
        path:'/softwaredetail',
        element:<Softwaredetail/>
    },
    //管理端
    {
        path:'/management',
        element:<Management/>,
        children: [
        {
            path:'addsoftware',
            // element:<Softwaredetail/>
        },
        {
            path:'manageimf',
            // element:<Softwaredetail/>
        },
        {
            path:'authorizationmethod',
            // element:<Softwaredetail/>
        }
    ]
    }
]


export default routes
