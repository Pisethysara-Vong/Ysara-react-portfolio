import { RiReactjsLine } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io5"
import { FaFlutter } from "react-icons/fa6"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaGitAlt } from "react-icons/fa"
import { FaFigma } from "react-icons/fa"
import { motion, Variants } from 'framer-motion';

const iconVariants = (duration: number): Variants => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
        duration: duration, // Use dynamic duration
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        },
    },
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5 }}
            className='my-16 text-center text-4xl'>Technologies</motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2.4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-7xl text-blue-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.9)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFlutter className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-orange-600"/>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaFigma className="text-7xl text-violet-600"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies