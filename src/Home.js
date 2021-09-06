import React,{useState} from 'react'
import BlogList from './BlogList'

function Home() {
    const [blogs,setBlogs]=useState([
        {title: 'My new Website', body:'Lorem ipsum....', author:'Mario',id:1},
        {title: 'Blog & Art by me', body:'Lorem ipsum....', author:'Gomez',id:2},
        {title: 'My Epic travel guide', body:'Lorem ipsum....', author:'Mario',id:3}
    ])

    return (
        <div className="home">  
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='Mario')} title="Mario's Blogs"/>
        </div>
    )
}

export default Home
