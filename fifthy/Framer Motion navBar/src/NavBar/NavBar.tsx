import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MotionConfig, motion, stagger, useCycle } from "framer-motion";
import { NavStyle } from "./style";
export default function NavBar() {
  const [menu, toggleMenu] = useCycle(false, true);

  return (
    <NavStyle>
      <header>
        <h1>LOGO</h1>
        <motion.nav
        initial={{y: 100}}
        animate={{y: 0}}
        transition={{
            type: 'spring',
            bounce: 0.5
        }}

        >
          <ul className={menu ? 'nav' : 'nav active'}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </motion.nav>
        <button 
        onClick={() => toggleMenu()}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </header>
    </NavStyle>
  );
}
