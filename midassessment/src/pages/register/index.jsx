import {
  Form,
  Input,
  Button
} from 'antd';
import React, { useState } from 'react';

export default function index() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="register"
      onFinish={onFinish}>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            type: 'username',
            message: 'The input is not valid Username',
          },
          {
            required: true,
            message: 'Please input your Username',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{ position: 'absolute', left: '50%', top: '60%', transform: 'translateX(-50%)' }} htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}
