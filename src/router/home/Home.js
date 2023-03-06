import React from 'react'
import Banner from '../../components/banner/Banner'
import Product from '../../components/product/Product'
import AsaxiyAbout from '../../components/asaxiy-about/AsaxiyAbout'
function Home() {
  return (
    <div className=''>
        <Banner/>
        <Product/>
      <AsaxiyAbout/>
    </div>
  )
}

export default Home