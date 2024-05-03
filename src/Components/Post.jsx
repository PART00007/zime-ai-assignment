import { useState, useEffect , useCallback } from "react";
import axios from 'axios';
import { Table,Input,Tag,Space,Button } from "antd";
import Filter from "./Filter.jsx";


function Post({page=1,setPage}) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 

  const getdata = useCallback(async () => {
      try {
          const skip = (page - 1) * 10;
          const response = await axios.get(`https://dummyjson.com/posts/search?q=${searchQuery}&skip=${skip}&limit=10`);
          setData(response.data.posts);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  }, [page, searchQuery]);

  useEffect(() => {
      getdata();
  }, [getdata]);


  
  const handlepagechange = (changeby) => {
    setPage(page + changeby);
  };
  const handlefilterbar = (tag) =>{
    const filterbar = data.filter((post)=>post.tags.includes(tag))
    setData(filterbar)
  }
  const columns = [
   
    {

      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
   {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
    {
      title: "Tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
          <>
              {tags.map((tag, index) => {
                  let color = "blue"
                  return (
                      <Tag color={color} key={index}>
                          {tag.toUpperCase()}
                      </Tag>
                  );
              })}
          </>
      ),
  },
     
  ];
  return (
    <div>
      <Filter data={data} setData={setData}/>
      <div className="seach_bar">
      <Input
                    size="large"
                    width="50px"
                    type="text"
                    placeholder="Search your favourites here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
      </div>
     
      <Table dataSource={data} columns={columns} style={{border:"1px solid black"}} />;
     
      <button disabled={page === 0} onClick={() => handlepagechange(-1)}>
        prev
      </button>
      <button>{page}</button>
      <button  disabled={page===14} onClick={() => handlepagechange(+1)}>next</button>
    </div>
  );
}
export default Post;
