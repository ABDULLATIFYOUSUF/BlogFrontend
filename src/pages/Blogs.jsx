import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard';

function Blogs() {

  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const {data} = await axios.get('https://blog-backend-seven-gamma.vercel.app/api/v1/blog/all-blogs')
      if(data?.success){
        setBlogs(data?.blogs)
      }
    } catch (error) {
      console.log(error)  
    }
  }
  useEffect(() => {
    getAllBlogs();
  }, []);

  return(
     <div>
    {blogs && blogs.map((blog) => (
  <BlogCard 
      id={blog?._id}
      isUser={localStorage.getItem("userId") === blog.user?._id}
      title={blog?.title}
      description={blog?.description}
      image={blog?.image}
      username={blog?.user?.username}
      time={blog.createdAt}
      /> 
      ))}
      
    </div>
  );
}

export default Blogs;
