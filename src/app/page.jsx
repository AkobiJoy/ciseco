
'use client'

import HomeSecTwo from '@/Components/HomeSections/HomeSecTwo'
import HomeSectionOne from '../Components/HomeSections/HomeSectionOne'
import React, { useState } from 'react'
import HomeSectionFour from '@/Components/HomeSections/HomeSectionFour'
import HomesecThree from '@/Components/HomeSections/HomesecThree'
import HomeSecSix from '@/Components/HomeSections/HomeSecSix'
import HomeSecFive from '@/Components/HomeSections/HomeSecFive'
import Navbar from '@/Components/Navbar'

const page = () => {
  const [isDark, setIsDark] = useState(false)
 
  const toggleIsDark = ()=> {
    setIsDark(!isDark)
  }
  return (
    <div className={isDark === true ? 'dark' : 'light'}>
      { <Navbar toggleIsDark={toggleIsDark} isDark={isDark}/> }
      <HomeSectionOne/>
      <HomeSecTwo/>
      <HomesecThree/>
      <HomeSectionFour/>
      <HomeSecFive/>
      <HomeSecSix/>
    </div>
  )
}

export default page

