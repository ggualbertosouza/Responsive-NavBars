import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";



export default function SubMenu({ data }) {
    const {pathname} = useLocation()
    const [subMenu, setSubMenu] = useState<boolen>(false)
  return (
    <>
      <li className="link" onClick={()=>{setSubMenu(!subMenu)}}>
        <data.icon size={23} />
        <p className="capitalize flex-1">{data.name}</p>
        <IoIosArrowDown className={`${subMenu && 'rotate-180'} duration-200`} />
      </li>
      <motion.ul 
      animate={
        subMenu 
        ? {
            height: 'fit-content'
        }:{
            height:  0
        }
      }
      className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden">
        {data.menus?.map((menu) => (
          <li key={menu}>
            <NavLink 
            to={`/${data.name}/${menu}`}
            className="link !bg-transparent capitalize"
            ></NavLink>
            {menu}
          </li>
        ))}
      </motion.ul>
    </>
  );
}
