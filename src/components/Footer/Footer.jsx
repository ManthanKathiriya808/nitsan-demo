import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5 container-fluid text-white  bg-blacked'>
      <div className="box py-5 container">
        <div className="row row-cols-md-2 d-flex align-items-center  py-5 row-cols-1 g-3">
          <div className="col">
            <h1 className='mb-3'>Ready to launch your next project?</h1>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next TYPO3 Headless website.</p>
          </div>
          <div className="col text-end">
            <button className='btn btn-primary px-4 py-2  fs-5'>Get Started On A Project</button>
          </div>
         </div>

        <div className='my-3 text-white fs-2'>
          
         <hr />
        </div>

        <div className="div  pt-5 pb-3 mt-2">
          <div className="content">
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <img src="https://t3-shiva.t3planet.com/fileadmin/ns_theme_t3shiva/logo-main-white.png" alt="" />
                  <div className="box mt-3">
                    <p>301, Victoria Heights, Victoria Park Road, Bhavnagar – 364002, Gujarat - INDIA.</p>
                  </div>
                </div>
                <div className="col">
                  <h5>Contact us</h5>
                  <div className="box mt-3 fw-bolder">
                    <p>contact(at)t3planet.com</p>
                    <p>+ 91 9898818919</p>
                    <p>+ 49 212 73879993</p>
                  </div>
                </div>
                <div className="col">
                  <div className="box">
                    <h5>Follow US</h5>
                    <div className="content fs-5 mt-1 align-items-center d-flex gap-4">
                      <i class="bi bi-twitter text-white"></i>
                      <i class="bi bi-facebook"></i>
                      <i class="bi bi-linkedin"></i>
                      <i class="bi bi-youtube"></i>
                      <i class="bi bi-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>

        
        <div className='my-3 text-white fs-2'>
          
         <hr />
        </div>

        <div className="div text-center mt-4">
          <p>Copyright 2022, All Right Reserved, Made by T3Planet with Love!</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
