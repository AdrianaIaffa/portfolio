import React from 'react'

import './Projects.css'


export default function Projects() {
  return (
    <div className="screen-projects">
       <div className='projects-title'>
        <h1>/work</h1>
        <h6>Some of my most recent projects</h6>
       </div>

       <div className='project-body'>


        {/* ----CARD1---- */}
        <div className="project-card">
        <img  src="/bookclub.png" alt="screenshot of main page" />
        <div className='project-text'>
            <h1>The Book Club</h1>
            <p> Developed a Book Club website Using Django, Django REST framework,
                React and PostrgeSQL allowing users to initiate discussions about their 
                favourite books.</p>
            <a href="https://bookclub-frontend-production.up.railway.app/landingpage" target="_blank" rel="noopener noreferrer">View Site</a>
            <a href="https://github.com/AdrianaIaffa/fitness-app" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        </div>

         {/* ----CARD2---- */}
         <div className="project-card">
        <img  src="/tracktive.png" alt="screenshot of main page"  />
        <div className='project-text'>
            <h1>Tracktive, a fitness tracker</h1>
            <p> Collaborated on a one-week group project with two other developers. We created a fitness tool, tracking workout progress and diet. Took ownership of both Backend and Frontend for the workout tracker in this full-stack CRUD application using Node.js, Express, MongoDB, and Next.js. First exposure to React and experience in using GitHub forking branches and handling merges.</p>
            <a href="https://tracktive.netlify.app/" target="_blank" rel="noopener noreferrer">View Site</a>
            <a href="https://github.com/AdrianaIaffa/fitness-app" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        </div>

         {/* ----CARD3---- */}
         <div className="project-card">
        <img  src="/outfitforecast.png" alt="screenshot of main page"  />
        <div className='project-text'>
            <h1>Outfit Forecast</h1>
            <p>  Completed a one-week solo project inspired by the film "Clueless," where I designed an app for cataloguing clothes 
                  as well as creating new outfit ideas. Developed my first full-stack CRUD website using Node.js, Express, MongoDB, and Vue. 
                  This project marked my introduction to the intricacies of a full-stack application.</p>
            <a href="https://stupendous-truffle-16e88c.netlify.app/login" target="_blank" rel="noopener noreferrer">View Site</a>
            <a href="https://github.com/AdrianaIaffa/sei-75-backend" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        </div>

         {/* ----CARD4---- */}
         <div className="project-card">
        <img  src="/snake.png" alt="screenshot of main page" />
        <div className='project-text'>
            <h1>Snake</h1>
            <p> D Developed a one-week solo project, building a game of choice using vanilla JavaScript, HTML, and CSS. 
                  Strengthened logic skills and gained a solid foundation in JavaScript fundamentals.</p>
            <a href="https://adrianaiaffa.github.io/SNAKEGAME/" target="_blank" rel="noopener noreferrer">View Site</a>
            <a href="hhttps://github.com/AdrianaIaffa/SNAKEGAME" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
        </div>

       </div>
        
    </div>
  )
}
