import React, { useState, useEffect } from "react";
import { Form, Table, Button, Checkbox, Input } from 'antd';
import 'antd/dist/antd.css';


function MyMain() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const finishRfa = (value) => {
    console.log("raf++>", value)

    let ary = items
    ary.push(value);
    setItems(ary)

    console.log("item==>", items)



  }

  useEffect(() => {
    fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(false);
          setItems(result.data)

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  const columns = [{
    title: 'Name',
    dataIndex: 'company_name',
  },
  {
    title: 'description',
    dataIndex: 'description',

  },
  {
    title: 'end_date',
    dataIndex: 'end_date',

  },
  {
    title: 'project_id',
    dataIndex: 'project_id',

  },
  {
    title: 'start_date',
    dataIndex: 'start_date',

  },
  {
    title: 'status',
    dataIndex: 'status',

  },
  {
    title: 'project_code',
    dataIndex: 'project_code',

  }];



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


      <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
      </Form.Item>

      
      <Form.Item>

        <Table columns={columns} dataSource={items} />
      </Form.Item>
    </Form>

  );
}

export default MyMain;