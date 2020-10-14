import React from 'react'


const Form=()=>{

    const loadPic=()=>{
        
    }

    return(
        <div className="form-container">
        <form action="#" className="form">
            <div className="inputs">
                <label for="name">Name</label>
                <input className="name-input" type="text"></input>
            </div>
            <div className="img-inputs-container">
                <div className="inputs">
                    <label for="file">Header Image</label>
                    <input onChange={loadPic} type="file" multiple='false' accept="image/*"
                    className="header-pic"></input>
                    <div className="img-container" id="head-img-container">
                        <img alt="" className="img-preview" id="head-img-preview"></img>
                    </div>
                </div>
                <div className="inputs">
                    <label for="file">Profile Picture</label>
                    <input type="file" multiple='false' accept="image/*"
                    className="profile-pic"></input>
                    <div className="img-container" id="pro-img-container">
                        <img alt="" className="img-preview" id="pro-img-preview"></img>
                    </div>
                </div>
            </div>
            <div className="tag-inputs">
                <div className="inputs">
                    <label for="tag">Tag</label>
                    <input className="tag-input" type="text"></input>
                </div>
                <div className="colors">
                        <label for="tag-color">Tag Background Color</label>
                        <input type="color" className="background-color"></input>
                        <label for="text-color">Text Color</label>
                        <input type="color" className="text-color" value="#ffffff"></input>
                </div>
            </div>
            <div className="inputs">
                <label for="heading">Heading</label>
                <input className="heading-input" type="text"></input>
            </div>
            <div className="inputs">
                <label for="post">Post</label>
                <textarea name="post" className="post-input" cols="30" rows="10" placeholder="What you write'n"></textarea>
            </div>
            <div className="submit">
                <button className="add" type="submit">Submit</button>
            </div>
        </form>
    </div>
    )
}

export default Form