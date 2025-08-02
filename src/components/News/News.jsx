import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='container  py-2'>
            <div>
      <div className="cover my-5 pt-5 text-center">
            <h6 className='text-primary'>
                Our News
            </h6>
            <h1 className='mt-3 fw-bolder mb-5'>
           News stories to boost your <br/> knowledge with our expert blog
            </h1>



   <NewsCard/>
            
      </div>
    </div>
    </div>
  )
}

export default News
