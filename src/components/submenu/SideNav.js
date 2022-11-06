import React from 'react'
import SideItem from './SideItem'
import { navItems } from '../data/NavItemsData';

const SideNav = () => {
  return (
    <div>
    <h2>SideNav</h2>
    {navItems.map((navItem, index) => {
        return <SideItem key={index} items={navItem}/>;
    } )}
    </div>
  )
}

export default SideNav