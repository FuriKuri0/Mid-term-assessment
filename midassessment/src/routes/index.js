import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'
import Register from '../pages/register'
import Softwaredetail from '../pages/softwaredetails'
import Softwaremsg from '../pages/softwaremsg'
import Versionimf from '../pages/versionimf'
import Licensing from '../pages/licensing'
import Personalcen from '../pages/personalcen'
import Mysoftware from '../pages/mysoftware'
import Myauthorization from '../pages/myauthorization'
import Accountinf from '../pages/accountinf'
import Personalinf from '../pages/personalinf'
import Fingerprint from '../pages/fingerprint'

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
                path: 'accountinf',
                element:<Accountinf/>,
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
                path: '',
                element: <Navigate to='mysoftware' />
            }
         ]
    },
    //默认
    {
        path: '/',
        element: <Navigate to='/dlzc' />
    }
]
export default routes