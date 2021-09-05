import React,{useState} from 'react'

function Home() {
    const [blogs,setBlogs]=useState([
        {title: 'My new Website', body:'Lorem ipsum....', author:'Mandio',id:1},
        {title: 'Blog & Art by me', body:'Lorem ipsum....', author:'Gomez',id:2},
        {title: 'My Epic travel guide', body:'Lorem ipsum....', author:'Mrinio',id:3}
    ])
    return (
        <div className="home">  
        
                {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                    <h2> {blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </div>
                    
                ))}
        </div>
    )
}

export default Home
