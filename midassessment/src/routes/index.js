import { Navigate} from 'react-router-dom'
import Dlzc from '../pages/dlzc'
import Namel from '../pages/namel'
import Emaill from '../pages/emaill'

const routes = [
    {
        path: '/dlzc',
        element: <Dlzc />,
        children: [
            {
                path: 'namel',
                element:<Namel/>
            },
            {
                path: 'emaill',
                element:<Emaill/>
            },
            {
                path: '',
                element: <Navigate to='namel' />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/dlzc' />
    }
]
export default routes