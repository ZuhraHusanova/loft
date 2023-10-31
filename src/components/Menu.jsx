import React from 'react'
import kitchen from "../assets/img/kitchen-icon.png"
import bedroom from "../assets/img/bedroom-icon.png"
import livingroom from "../assets/img/livingroom-icon.png"
import closet from "../assets/img/closet-icon.png"
import office from "../assets/img/office-icon.png"
import childrensroom from "../assets/img/childrensroom-icon.png"
import { NavLink } from 'react-router-dom'
export default function Menu() {
    return (
        <div className='menu'>
            <div className='container'>
                <div className='menu-content'>
                    <NavLink to={"kitchens"} className='menu-item'>
                        <img src={kitchen} alt="" />
                        <span className='menu-text'>Кухни</span>
                    </NavLink>
                    <NavLink to={"bedrooms"} className='menu-item'>
                        <img src={bedroom} alt="" />
                        <span className='menu-text'>Спальни</span>
                    </NavLink>
                    <NavLink to={"living"} className='menu-item'>
                        <img src={livingroom} alt="" />
                        <span className='menu-text'>Гостинные</span>
                    </NavLink>
                    <NavLink to={"hallways"} className='menu-item'>
                        <img src={closet} alt="" />
                        <span className='menu-text'>Прихожие</span>
                    </NavLink>
                    <NavLink to={"office"} className='menu-item'>
                        <img src={office} alt="" />
                        <span className='menu-text'>Офисная мебель</span>
                    </NavLink>
                    <NavLink to='children' className='menu-item'>
                        <img src={childrensroom} alt="" />
                        <span className='menu-text'>Детская</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
