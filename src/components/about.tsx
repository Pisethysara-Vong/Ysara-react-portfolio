import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
          transition={{ duration: 0.5 }}
          className='my-12 text-center text-4xl'>About me</motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
          transition={{ duration: 0.5, delay: 0.1 }}
          className=" flex flex-wrap justify-center">
            <div className="max-w-3xl text-justify xl:text-center">
                <p>{ABOUT_TEXT}</p>
            </div>
        </motion.div>
    </div>
  )
}

export default About