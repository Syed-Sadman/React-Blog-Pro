import { useState } from "react/cjs/react.development";



const Contact=()=>{
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = { title, body, author};
        console.log(blog);
    }

    return(
        <div className="contact">
            <h1> Add new blogs</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title : </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >

                </textarea>
                <label>Blog Author </label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
               
            </form>
        </div>
    )
}

export default Contact;