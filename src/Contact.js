


const Contact=()=>{
    return(
        <div className="contact">
            <h1> Add new blogs</h1>
            <form>
                <label>Blog title : </label>
                <input 
                type="text"
                required
                />
                <label>Blog body</label>
                <textarea
                required
                >

                </textarea>
                <label>Blog Author </label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Contact;