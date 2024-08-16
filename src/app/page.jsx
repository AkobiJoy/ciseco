
import HomeSecTwo from '@/Components/HomeSections/HomeSecTwo'
import HomeSectionOne from '../Components/HomeSections/HomeSectionOne'
import React from 'react'
import HomeSectionFour from '@/Components/HomeSections/HomeSectionFour'
import HomesecThree from '@/Components/HomeSections/HomesecThree'
import HomeSecSix from '@/Components/HomeSections/HomeSecSix'
import HomeSecFive from '@/Components/HomeSections/HomeSecFive'

const page = () => {
  return (
    <div>
      <HomeSectionOne />
      <HomeSecTwo/>
      <HomesecThree/>
      <HomeSectionFour/>
      <HomeSecFive/>
      <HomeSecSix/>
    </div>
  )
}

export default page

