import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
// import routes from './routes'
import './index.css'
import logo from './logo192.png'
const { Header } = Layout;
const items1 = [
    { key: 1, label: <Link to='/home'>产品</Link> },
    { key: 2, label: <Link to='/white'>购买授权</Link> },
    { key: 3, label: <Link to='/MySoftware'><UserOutlined style={{ fontSize: '20px' }} /></Link> }
];

export default function Head() {
    return (
        <Layout>
            <Header className="header">
                <div className="logo"><img src={logo} alt="hehe" /></div>
                <div className="TopNav_Name">软件管理平台</div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} items={items1} />
            </Header>
        </Layout>
    )
}