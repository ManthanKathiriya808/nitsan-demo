import React from 'react'

const CircleCard = () => {
  return (
    <div className="circle-card  my-2">

        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">

                <div className="col d-flex justify-content-center flex-column align-items-center">
        <h1 className='rounded-circle bg-success fs-1 d-flex align-items-center justify-content-center text-white' style={{width:"70px", height:"70px"}} > 1</h1>
        <div className="content my-4">
            <h2 className='fw-bolder pb-2'>Install Template</h2>
            <h6 className='text-secondary '>Simply install the template to your latest TYPO3 version and you're ready to go!</h6>
        </div>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center">
        <h1 className='rounded-circle bg-primary fs-1 d-flex align-items-center justify-content-center text-white' style={{width:"70px", height:"70px"}} > 1</h1>
        <div className="content my-4">
            <h2 className='fw-bolder pb-2'>Install Template</h2>
            <h6 className='text-secondary '>Simply install the template to your latest TYPO3 version and you're ready to go!</h6>
        </div>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center">
        <h1 className='rounded-circle bg-danger fs-1 d-flex align-items-center justify-content-center text-white' style={{width:"70px", height:"70px"}} > 1</h1>
        <div className="content my-4">
            <h2 className='fw-bolder pb-2'>Install Template</h2>
            <h6 className='text-secondary '>Simply install the template to your latest TYPO3 version and you're ready to go!</h6>
        </div>
                </div>

            </div>    

    </div>
  )
}

export default CircleCard
