import React from 'react'

function Home() {
    const handleClick=(e)=>{
        console.log('hello',e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>      
            <button onClick={handleClick}> Click here</button>

        </div>
    )
}

export default Home
