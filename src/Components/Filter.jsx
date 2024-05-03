import React from 'react'

import { Table,Input,Tag,Space,Button } from "antd";
const Filter = ({data,setData}) => {
    const handlefilterbar = (tag) =>{
        const filterbar = data.filter((post)=>post.tags.includes(tag))
        setData(filterbar)
      }
  return (
    <div style={{margin:"30px", display:"flex" }}>
        
      <Space size="small" >
                   <Button type="primary" onClick={() => handlefilterbar("english")}>English</Button>
                    <Button type="primary" onClick={() => handlefilterbar("classic")}>Classic</Button>
                 
                    <Button type="primary" onClick={() => handlefilterbar("love")}>Love</Button>
                    <Button type="primary" onClick={() => handlefilterbar("american")}>American</Button>
                    <Button type="primary" onClick={() => handlefilterbar("fiction")}>Fiction</Button>
                    <Button type="primary" onClick={() => handlefilterbar("mystery")}>Mystery</Button>
                    <Button type="primary" onClick={() => handlefilterbar("crime")}>Crime</Button>
                    <Button type="primary" onClick={() => handlefilterbar("history")}>History</Button>
                    <Button type="primary" onClick={() => handlefilterbar("french")}>French</Button>
                    <Button type="primary" onClick={() => handlefilterbar("magical")}>Magical</Button>
                </Space>
    </div>
  )
}

export default Filter