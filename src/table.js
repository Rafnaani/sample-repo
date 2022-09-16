import React, {useState,useEffect} from "react";
import {Form } from 'antd';

import {Table} from 'antd';
import 'antd/dist/antd.css';
var temp;

function MyTable() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      console.log("allen")
      fetch("http://timeapi.kaaylabs.com/api/v1/project_view/")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(false);
            setItems(result.data)
            temp=result.data;
            console.log("ts--->", result.data)
            console.log(temp);
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
    
      render: (text) => <a>{text}</a>,
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
      
      <Form>
        <Table columns={columns} dataSource={items} />
     </Form> 
    );
  }

export default MyTable;