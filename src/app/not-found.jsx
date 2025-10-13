import React from 'react'

const notFound = () => {
    return (
        <section className="top-banner" style={{ height: '100vh', display: 'flex', alignItems: 'center'}}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-6 col-md-8">
                        <div className="right-col text-center">
                            <h1>Page <span>Not</span> Found</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default notFound;
