import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
      <div className="main d-flex container my-5   pt-5  align-items-center">
        <div className="row row-cols-lg-2 row-cols-1 gy-4">
            <div className="col">
                <div className="content header-cover ">
                <div>
                    <h1 className='display-5 fw-bold'>T3 Shiva, Where TYPO3 Meets ReactJs!</h1>
                <p className='text-secondary fs-5'>T3 Shiva the ultimate TYPO3 Headless Template crafted with ReactJS & NextJS. Focusing on modern design and lightning fast speed.</p>
                </div>
                <div className="button  mt-4">
                    <a href='demo' className="btn px-3 py-2 fs-5     btn-primary">
                        Get Started Now <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
        </div>
            </div>
            <div className="col">
                        <div className="image">
            <img src="	https://t3-shiva.t3planet.com/fileadmin/ns_theme_t3shiva/banner/t3shiva_hero_banner.png" className='img-fluid' alt="" />
        </div>
            </div>
        </div>
        

      </div>
    </div>
  )
}

export default Hero
