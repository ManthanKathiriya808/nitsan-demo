import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'

const Demo = () => {
    
        const [data,SetData] = useState([])

    useEffect(()=>{

        fetch(`https://t3-shiva.t3planet.com/`)
        .then(res=> res.json())
        .then(resp=> SetData(resp))

    },[])
    console.log(data)
    //    console.log(data.content.colPos0[4].content.pi_flexform_content.video)
  return (
    <Layout>
          <iframe 
    src="https://www.example.com" 
      title="Example Website"
      width="100%"
      height="400px"
   
    ></iframe>
    </Layout>
  )
}

export default Demo
