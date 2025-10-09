import React from 'react'

const GlobalBtn = () => {
    return (
        <div className="btn-sec">
            <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal" className="btn btn-theme">Get Started <span><i className="ri-arrow-right-up-line"></i></span></button>
            <a href="javascript:void(Tawk_API.toggle())" className="btn btn-theme-outline">Let’s Chat</a>
        </div>
    )
}

export default GlobalBtn
