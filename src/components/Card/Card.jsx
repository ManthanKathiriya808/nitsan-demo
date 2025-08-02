import React from 'react'

const Card = () => {
  return (
    <div className='container mb-5'  >

        <div className="row row-cols-lg-3 text-center row-cols-md-3 row-cols-1" >
                <div className="col " >
                    <div  class="card shadow"  style={{width:"24rem"}}>
  <img src="https://t3-shiva.t3planet.com/fileadmin/ns_theme_t3shiva/services/Service1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <h4 class="card-title fw-bolder py-3">Pleasant Design</h4>
    <p class="card-text pb-3">Simple yet clean and elegant themed components and layouts with same design for best user experience.</p>
    <a href="#" class="btn btn-success px-5 py-3">Learn More</a>
  </div>
</div>
                </div>
                <div className="col">
                    <div class="card shadow" style={{width:"24rem"}}>
  <img src="https://t3-shiva.t3planet.com/fileadmin/ns_theme_t3shiva/services/Service1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <h4 class="card-title fw-bolder py-3">Pleasant Design</h4>
    <p class="card-text pb-3">Simple yet clean and elegant themed components and layouts with same design for best user experience.</p>
    <a href="#" class="btn btn-primary mb-3 px-5 py-3">Learn More</a>
  </div>
</div>
                </div>
                <div className="col">
                    <div class="card shadow" style={{width:"24rem"}}>
  <img src="https://t3-shiva.t3planet.com/fileadmin/ns_theme_t3shiva/services/Service1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <h4 class="card-title fw-bolder py-3">Pleasant Design</h4>
    <p class="card-text pb-3">Simple yet clean and elegant themed components and layouts with same design for best user experience.</p>
    <a href="#" class="btn btn-danger px-5 py-3">Learn More</a>
  </div>
</div>
                </div>
         
        </div>
        
    </div>
  )
}

export default Card
