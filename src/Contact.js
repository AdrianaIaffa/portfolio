import React from 'react'
import { motion } from "framer-motion"
import { DiMongodb, DiJavascript1, DiNpm, DiNodejs, DiDjango, DiGithubFull, DiResponsive, DiGithub  } from "react-icons/di";
import { MdHtml, MdCss, MdOutlineEmail } from "react-icons/md";
import { SiExpress, SiPostgresql, SiVuedotjs, SiReact, SiLinkedin  } from "react-icons/si";
import { TbBrandNextjs, TbBrandPython } from "react-icons/tb";
import './Contact.css'

export default function Contact() {
    const iconData = [
      { Icon: DiMongodb, name: 'MongoDB' },
      { Icon: DiJavascript1, name: 'JavaScript' },
      { Icon: DiNpm, name: 'npm' },
      { Icon: DiNodejs, name: 'Node.js' },
      { Icon: DiDjango, name: 'Django' },
      { Icon: DiGithubFull, name: 'GitHub' },
      { Icon: DiResponsive, name: 'Responsive Design' },
      { Icon: MdHtml, name: 'HTML' },
      { Icon: MdCss, name: 'CSS' },
      { Icon: SiExpress, name: 'Express.js' },
      { Icon: SiPostgresql, name: 'PostgreSQL' },
      { Icon: SiVuedotjs, name: 'Vue.js' },
      { Icon: SiReact, name: 'React' },
      { Icon: TbBrandNextjs, name: 'Next.js' },
      { Icon: TbBrandPython, name: 'Python' },
    ]
  return (
    <div className='screen-contact'>
      
        <div className='about-title'>
            <h1>/aboutMe</h1>
        </div>

        <div className="media-query">
        <div className='about-text'>

        <p>I am a versatile and creative problem-solver with a unique blend of skills, 
                combining a <span>background in photography</span> with a newfound passion for software engineering. 
                As a seasoned photographer, I sharpen my ability to capture the essence of a moment and 
                transform ideas into visual artistry. Now, I am translating that creativity and attention 
                to detail into crafting elegant and user-friendly software solutions.
         </p>


        </div>
        <div className="skills">
          {iconData.map(({ Icon, name }, index) => (
            <motion.div  
            whileHover={{ scale: 1.3 }} 
            key={index} 
            className='skills-icon'
            >
              <Icon />
              <p>{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
        <div className='contact'>
            <h2>Get In Touch!</h2>
            <p>I have recently finished a Software Engineering course with General Assembly
              and I am excited to put all my skills to use! If you have any questions, requests or
              freelance opportunities, please do not hesitate to contact me.
            </p>
            <div className='contact-details'>
            <a href="mailto:adrianaiaffabalart@gmail.com">
            <MdOutlineEmail /> Email Me!
              </a>
                <a href="https://www.linkedin.com/in/adrianaiaffa/" target="_blank" rel="noopener noreferrer"><SiLinkedin />LinkedIn</a>
                <a href="https://github.com/AdrianaIaffa" target="_blank" rel="noopener noreferrer"><DiGithub />Github</a>
            </div>
        </div>
        
    </div>
  )
}
