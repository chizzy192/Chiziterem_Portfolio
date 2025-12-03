import Header from './Header'
import { Github, Link } from 'lucide-react'
import facility from "../assets/facility-fix.png"
import landscape from '../assets/landscape-design.png'
import { useEffect } from 'react';
import '../components/style.css'
import chiziterem from '../assets/chiziterem-portfolio.png'
type Project = {
  link: string;
  github: string;
  title: string;
  description: string;
  stacks:string[];
  img: string | Record<string, string>;
};

const projects: Project[] = [
  {
    link:"https://facility-fix.vercel.app/",
    github:"https://github.com/chizzy192/Facility-Report-Maintenance-App",
    title:"Facility-Fix",
    description:"Facility Fix is a modern platform that makes handling repairs simple and fast. It connects people to trusted technicians and brings real-time updates to the entire maintenance process.",
    img:{facility},
    stacks:['React', 'TailwindCSS', 'Supabase']
  }, 
  {
    link:"https://landscape-journal.vercel.app/",
    github:"https://github.com/chizzy192/landscape-journal",
    title:"Landscape Journal",
    description:"Landscape Journal is a simple web app that lets users upload landscape photos, organize them, and perform full CRUD actions. It’s designed to make documenting, managing, and revisiting outdoor designs easy and intuitive.",
    img:{landscape},
    stacks:['HTML', 'CSS', 'JavaScript']
  }, 
  {
    link: "https://chiziteremeze.vercel.app",
    github: "https://github.com/chizzy192/Chiziterem_Portfolio",
    title: "Personal Portfolio",
    description: "A modern portfolio website built with React and Tailwind CSS, designed to showcase my projects, experience, and skills. It features a fully responsive UI, smooth animations, reusable components, and a dark/light mode toggle. The website is optimized for performance, accessibility, and mobile-first navigation.",
    img: {chiziterem},
    stacks:['TSX', 'TailwindCSS', 'Supabase']
  }
]

const Projects = () => {
  useEffect(() => {
              const observer = new IntersectionObserver((entries) => {
                console.log(entries);
                entries.forEach(entry=> {
                  if(entry.isIntersecting) {
                      entry.target.classList.add("show")
                  }
                })
              }, {
                  rootMargin:'0px 0px -400px 400px'
              });
              
              const spans = document.querySelectorAll("#projects .project-in");
          
              spans.forEach(span=>observer.observe(span))
          
              
              return () => observer.disconnect();
            }, []);
  return (
    <section id='projects' className='flex flex-col px-5 sm:px-20 lg:px-25 xl:px-35 text-center text-2xl font-inter justify-center items-center w-full h-auto sm:min-h-screen pb-10'>
      <Header>Projects</Header>
      <p className="text-sm lg:text-2xl mb-4">
        Most of my projects are beginner/junior level, but these are the ones that stood out for me!
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
        {projects.map((project, i) => {
          const imgSrc = typeof project.img === 'string'
            ? project.img
            : Object.values(project.img)[0];

          return (
            <div 
              key={i} 
              className="group relative w-full h-auto lg:h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer project-in"
            >
              
              <img 
                src={imgSrc} 
                alt={project.title} 
                loading='lazy'
                className='w-full lg:h-full lg:object-cover transition-transform duration-500 group-hover:scale-105' 
              />
              
              {/* Overlay */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 ">
                  
                  {/* Top Icons */}
                  <div className="flex justify-end gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className=" w-10 h-10 bg-(--accent) flex justify-center items-center rounded-full">
                      <Github className="w-6 h-6 text-white"/>
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-(--accent) flex justify-center items-center rounded-full">
                      <Link className="w-6 h-6 text-white"/>
                    </a>
                  </div>

                {/* Middle Stacks Display */}
                  <div className=" flex justify-center items-center">
                    <div className="flex gap-2 flex-wrap justify-center items-center bg-black/50 px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.stacks.map((stack, index) => (
                        <span 
                          key={index} 
                          className="text-white text-xs font-medium bg-white/10 px-2 py-1 rounded"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>


                  {/* Bottom Details */}
                  <div className='block text-left text-white'>
                    <h4 className='font-bold text-lg'>{project.title}</h4>
                    <p className='text-sm mt-1'>{project.description}</p>
                  </div>

                </div>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;
