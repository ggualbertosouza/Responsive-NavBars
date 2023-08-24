// Packages
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

// React Icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuey } from "react-responsive";
import { MdMenu } from "react-icons/md";
import AllApps from "../../pages/Allapps";

// Pages
import SubMenu from "./SubMenu";
import { IconType } from "react-icons";

type animationProps = {
  open: {
    width: string;
    transition: {
      damping: number;
    };
  };
  closed: {
    width: string;
    transition: {
      damping: number;
    };
  };
};

export type subMenuProps = [
  { name: string; icon: IconType; menus: string[] },
  { name: string; icon: IconType; menus: string[] }
];

const subMenusList: subMenuProps = [
  {
    name: "build",
    icon: RiBuilding3Line,
    menus: ["auth", "app settings", "hosting"],
  },
  {
    name: "analytics",
    icon: TbReportAnalytics,
    menus: ["dashboard", "realtime", "events"],
  },
];

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const Sidebar_animation: animationProps = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };
  return (
    <>
      <motion.div
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed md:block hidden"
      >
        {/* LOOG IMG */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3 overflow-hidden">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt="firebase-img"
            width={45}
          />
          <span className="text-xl whitespace-pre">FireBall</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden">
            <li>
              <NavLink to={"/"} className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to={"/settings"} className={"link"}>
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
            {/* SubMENU */}
            {isOpen && (
              <div className="border-y border-slate-300 py-5">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
          </ul>
        </div>

        <div></div>

        {/* Button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: -180,
                }
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="absolute w-fit h-fit z-50 right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
    </>
  );
}
