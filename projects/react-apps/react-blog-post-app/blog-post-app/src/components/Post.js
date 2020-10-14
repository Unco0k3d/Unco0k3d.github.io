import React from 'react'


const Post=()=>{
    return(
        <div className="container">
        <div className="card">
            <div className="card-header">
                <img src="../imgs/todo.PNG" alt="head pic"></img>
            </div>
            <div className="card-body">
                <span className="tag">I like loaders!</span>
                <h4>I will talk your ears off about loadies. Why? Because I can</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor modi iure eius officia ratione esse dicta aspernatur officiis accusamus et vero non recusandae necessitatibus, rerum quasi soluta quibusdam corrupti sequi!</p>
                <div className="user">
                    <img src="../imgs/me.PNG" alt="user pic"></img>
                    <div className="user-info">
                        <h5>Jim Nasium</h5>
                        <small>100 years ago</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Post