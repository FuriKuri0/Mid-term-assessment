import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'
import { Button} from 'antd';
import React,{useState} from 'react'
import routes from '../../routes';
import { NavLink ,useRoutes } from 'react-router-dom';

export default function Home() {
  const element = useRoutes(routes)
  //根据路由表生成对应的路由规则
  const [messages] = useState([
		{id:'001',title:'all',content:'全部'},
		{id:'002',title:'infoManage',content:'信息管理'},
		{id:'003',title:'rdDesign',content:'研发设计'},
		{id:'004',title:'productControl',content:'生产控制'},
    {id:'005',title:'firmware',content:'嵌入式软件'},
	])
  return (
    <div className="home">
      <div className="home-subnav">
        <ul className="home-subnav-left">
          {
            messages.map((m)=>{
              return (
                // {/* 路由链接 */}
                <li key={m.id}>
                  <NavLink title={m.title} to="/Contents">{m.content}</NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="home-subnav-right">
          <input type="text" placeholder='搜索'/>
          <Button shape="circle" icon={<SearchOutlined />} />
        </div>
      </div>
      {/* 注册路由 */}
      {element}
    </div>
  )
}
