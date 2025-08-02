import React from 'react'

const Videos = () => {
  return (
    <div className='container-fluid'>

        <div className="box bg text-white d-flex justify-content-center flex-column align-items-center">
            <h1 className='z-1 fw-bolder'>How do we help you to grow?</h1>
            <h5>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</h5>
        </div>
        <div className="div bg-blue ">
            <div className="texts my-5 container py-5">
                <div className="row row-cols-lg-2 py-5 row-cols-1">
                    <div className="col box"> 
                        <img src="https://t3-shiva.vercel.app/image/png/quote.png" alt="" />

                        <div className="contnet py-3 my-3">
                            <h5 className='fw-bolder mb-2 pb-4'>
                                
“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”
                            </h5>
                            <p className='text-secondary'>
                                <span className='fw-bolder pe-2 text-dark'>
                                Diego Morata

                                </span>
Web Developer
                            </p>
                        </div>
                    </div>
                    <div className="col box">
                        <img src="https://t3-shiva.vercel.app/image/png/quote.png" alt="" />

                        <div className="contnet py-3 my-3">
                            <h5 className='fw-bolder mb-2 pb-4'>
                                
“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”
                            </h5>
                            <p className='text-secondary'>
                                <span className='fw-bolder pe-2 text-dark'>
                                Diego Morata

                                </span>
Web Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Videos
