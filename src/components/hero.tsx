import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const container = (delay: number) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay}
    },
    right: {x: 100, opacity: 0},
    visibleRight: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay}
    }
})

const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Pisedhysara Vong</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Frontend Developer
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-4 font-light tracking-tighter text-justify'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.div variants={container(1.2)} initial="right" animate="visibleRight" className="sm:h-[500px] lg:h-[500px] overflow-hidden rounded-2xl">
                            <img className="h-full object-cover" src={profilePic} alt="Profile Picture" />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero