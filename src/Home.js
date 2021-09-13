import React,{useState,useEffect} from 'react'
import BlogList from './BlogList'

function Home() {
    const [blogs,setBlogs]=useState(null)
    const [isLoading,setLoading]=useState(true)
    const [error,setError]=useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
                throw Error ('Could not fetch data from the server');
            }
           return res.json()
        })
        .then(data=>{
            setBlogs(data)
            setLoading(false)
            setError(null);
        })
        .catch(err=>{
            setError(err.message)})
            setLoading(true)
    }, [])

    return (
        <div className="home">  
            {error && <div> {error}</div>}
            {isLoading && <div> Loading</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Mario')} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home
