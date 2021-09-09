import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'

function Home() {
    const [blogs,setBlogs]=useState(null)
    const [isLoading,setLoading]=useState(true)
    

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res=>{
           return res.json()
        })
        .then(data=>{
            setBlogs(data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="home">  
            {isLoading && <div> Loading</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Mario')} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home
