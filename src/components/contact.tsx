import { CONTACT } from '../constants';
import { FaTelegram } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl">Get in Touch</motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-4 flex items-center justify-center gap-1.5">
                    <FaTelegram className='text-2xl'/>
                    {CONTACT.telegram}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="my-4 flex items-center justify-center gap-1.5">
                    <FaPhoneAlt className='text-xl'/>
                    {CONTACT.phoneNo}
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                    viewport={{ once: true, amount: 0}} // `once: true` ensures it only triggers once
                    href='mailto:pisethysaravong@gmail.com' className="flex items-center justify-center gap-1.5" whileHover={{ scale: 1.1, transition: {duration: 0.15, ease: "easeInOut"} } }>
                    <MdEmail className='text-2xl'/>
                    <span className='border-b'>{CONTACT.email}</span>
                </motion.a>
            </div>
        </div>
    )
}

export default Contact