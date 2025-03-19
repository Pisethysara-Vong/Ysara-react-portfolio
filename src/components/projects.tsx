import { PROJECTS } from '../constants';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';


const Projects = () => {

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // `once: true` ensures it only triggers once
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-4xl">Projects</motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-12 flex flex-wrap justify-center lg:gap-16 lg:mb-8'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }} // `once: true` ensures it only triggers once
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4 flex justify-center'>
                            <img className='mb-6 rounded-2xl' src={project.image} alt={project.title} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }} // `once: true` ensures it only triggers once
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h6 className='mb-2 font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-2 text-sm font-medium text-blue-600'>
                                    {tech}
                                </span>
                            ))}
                            <div className="flex gap-2 mt-4">
                                <button className='px-5 py-3 bg-neutral-900 rounded hover:bg-purple-800 hover:text-neutral-900 duration-150 ease-in-out hover:scale-110 text-purple-800 font-bold flex items-center justify-center gap-1.5 cursor-pointer' onClick={() => window.open(project.websiteLink, "_blank", "noopener,noreferrer")}><TbWorld/>Visit</button>
                                <button className='px-5 py-3 bg-neutral-900 rounded hover:bg-purple-800 hover:text-neutral-900 duration-150 ease-in-out hover:scale-110 text-purple-800 font-bold flex items-center justify-center gap-1.5 cursor-pointer' onClick={() => window.open(project.githubLink, "_blank", "noopener,noreferrer")}><FaGithub/>Code</button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects