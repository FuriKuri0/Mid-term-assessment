import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import axios from 'axios'
const Namel = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState(0);
    const onFinish = (values) => {
        axios({
            method: 'POST',
            url: 'http://39.98.41.126:31104/users',
            data: JSON.stringify({
                username: values.username,
                password: values.password
            })
        }).then(
            response => { alert('登陆成功'); console.log(response); },
            error => {
                setError(1)
            }
        )
        // console.log('Received values of form: ', values);
    };
    const back = () => {
        navigate('/dlzc', {
            state: {
                a: 313
            }
        })
    }
    return (

        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        {
                            pattern: /[\w\u4e00-\u9fa5]{6,12}$/,
                            message: '用户名必须为6-12位字母/数字/中文'
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        {
                            pattern: /^(\w){6,20}$/,
                            message: '密码必须为6-20个字母、数字、下划线'

                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="javascript">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="javascript:;" onClick={back}>register now!</a>
                </Form.Item>
            </Form>
            <div>{error ? <Alert message="账号不存在或密码错误！" type="error" showIcon /> : ''}</div>
        </div>

    );
};

export default Namel;