import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
function ContactPage() {

  const finishRfa = (value) => {
    console.log("raf++>", value)
  }

  return (
        <Form onFinish={finishRfa}>
          <Form.Item
            label="company_name"
            name="company_name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="end_date"
            name="end_date"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="project_code"
            name="project_code"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="project_id"
            name="project_id"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="start_date"
            name="start_date"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="status"
            name="status"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

         

          
            <Button type="primary" htmlType="submit">
                Submit
              </Button>
        </Form>
  );
};

export default ContactPage;
