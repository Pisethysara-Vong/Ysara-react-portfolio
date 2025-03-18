import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";

const animation = () => ({
    hidden: {y: -100, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
})

const Navbar = () => {
    return <nav className="mb-8 flex items-center justify-between py-4">
        <motion.a
            variants={animation()}
            initial="hidden"
            animate="visible"
            href="/">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-18 duration-100 ease-in-out hover:border-b" src={logo} alt="logo"/>
            </div>
        </motion.a>
        <motion.div
            variants={animation()}
            initial="hidden"
            animate="visible"
            className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/pisedhysara-vong-689986293"  target="_blank" title="LinkedIn" className="duration-200 ease-in-out hover:scale-120 hover:text-blue-800">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/Pisethysara-Vong"  target="_blank" title="GitHub" className="duration-200 ease-in-out hover:scale-120">
                <FaGithub/>
            </a>
            <a href="https://t.me/Vong_Pisedhysara" target="_blank" title="Telegram" className="duration-200 ease-in-out hover:scale-120 hover:text-blue-400">
                <FaTelegram/>
            </a>
        </motion.div>
</nav>
};

export default Navbar;
