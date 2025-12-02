import Header from "./Header"
import react from '../assets/react.svg'
import css from '../assets/css3.webp'
import git from "../assets/git.png"

import html from '../assets/html-5.webp'
import responsive from "../assets/image.webp"
import js from "../assets/javascript.webp"
import tailwind from "../assets/tailwindcss.webp"
import supabase from "../assets/supabase.png"
import { useEffect } from "react"
import '../components/style.css'

type Skill = {
  skill: string;
  // keep avatar flexible if your data may be an object during transition
  avatar: string | Record<string, string>;
};

const skills: Skill[] = [{
    avatar:{html},
    skill:"HTML"
}, {
    avatar:{css},
    skill:"CSS"
}, {
    avatar: {js},
    skill:"JavaScript"
}, {
    avatar:{tailwind},
    skill:"Tailwind CSS"
}, {
    avatar:{react},
    skill: "React",
}, {
    avatar: {git},
    skill: "Git",
}, {
    avatar: {responsive},
    skill:"Responsive Design"
}, {
    avatar:{supabase},
    skill:"Supabase"
}]

const Skills = () => {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
        })
    }, {
        rootMargin:'0px 0px -150px 400px'
    });
    
    const spans = document.querySelectorAll("#skills .skill-in");

    spans.forEach(span=>observer.observe(span))

    
    return () => observer.disconnect();
    }, []);

  return (
    <section id="skills" className='flex px-10 sm:px-20 lg:px-35 text-center text-2xl font-inter flex-col justify-center items-center h-auto sm:h-screen pb-10'>
        <Header>Skills (Tech Stacks)</Header>
        <p className="text-sm lg:text-2xl skill-in mb-4">I have quite a list of technical skills and I'm also exicted to learn more...</p>

        <div className="grid lg:grid-cols-4 gap-3 grid-cols-1 sm:grid-cols-2 justify-between items-center">
                {skills.map((skill, i) => {
                // changed code
                const avatarSrc =
                    typeof skill.avatar === 'string'
                    ? skill.avatar
                    : Object.values(skill.avatar)[0]; // pick the first string value if it's an object

                return (
                    <div key={i} className="skill-in">
                        <div  className="bg-(--background) rounded-lg h-10 w-50 lg:h-15 shadow-md font-inter text-sm flex justify-center gap-4 items-center p-2 outline-pink-200 outline ">
                    <img src={avatarSrc} alt={skill.skill} className="w-10 h-10" loading="lazy"/>
                    <span>{skill.skill}</span>
                    </div>
                    </div>
                    
                );
                })}
            
        </div>
    </section>
  )
}

export default Skills
