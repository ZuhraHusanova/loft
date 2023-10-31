import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'
import Bedrooms from '../pages/Bedrooms'
import Bestsellers from '../pages/Bestsellers'
import Children from '../pages/Children'
import Hallways from '../pages/Hallways'
import Kitchens from '../pages/Kitchens'
import Living from '../pages/Living'
import Office from '../pages/Office'
import Promotion from '../pages/Promotion'
import About from '../pages/About'
export default function Layout() {
  return (
    <div>
      <Navbar />
       <Menu/>

           <Routes>
                <Route path='/' element={<Bestsellers/>}/>
                <Route path='/bestsellers' element={<Bestsellers/>}/>
                <Route path='/kitchens' element={<Kitchens/>}/>
                <Route path='/bedrooms' element={<Bedrooms/>}/>
                <Route path='/children' element={<Children/>}/>
                <Route path='/hallways' element={<Hallways/>}/>
                <Route path='/office' element={<Office/>}/>
                <Route path='/promotion' element={<Promotion/>}/>
                <Route path='/living' element={<Living/>}/>
                <Route path='/:id' element={<About/>}/>
           </Routes>
       
       <Footer/>
    </div>
  )
}
