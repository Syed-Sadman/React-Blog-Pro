//import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

function Home() {
    const {data,isLoading,error}=useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="home">  
            {error && <div> {error}</div>}
            {isLoading && <div> Loading</div>}
            {data && <BlogList blogs={data} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Mario')} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home
