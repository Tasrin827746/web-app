// import Templates from '@/app/components/Product/Form/Templates'
import Collaboration from '@/app/components/Product/Slides/Collaboration'
import Content from '@/app/components/Product/Slides/Content'
import Footer from '@/app/components/Product/Slides/Footer'
import Integration from '@/app/components/Product/Slides/Integration'
import SlidesBanner from '@/app/components/Product/Slides/SlidesBanner'
import Template from '@/app/components/Product/Slides/Template'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-28'>
        <SlidesBanner/>
        <Collaboration/>
        <Integration/>
        <Content/>
        <Template/>
        <Footer/>

    </div>
  )
}

export default page