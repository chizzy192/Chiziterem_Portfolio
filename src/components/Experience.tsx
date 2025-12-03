import { useEffect } from "react"
import Header from "./Header"

type Experiences ={
    role: string,
    company: string,
    location: string,
    year: string,
    works: string[]
}
const experiences : Experiences[] = [{
    role: 'Frontend Developer Intern / SIWES Trainee',
    company:'Algorithmic Explorer (A.E)',
    location:' Nsukka, Enugu State',
    year: 'July 2025 - Nov 2025',
    works: [
        'Built responsive UI components using HTML, CSS, Tailwind CSS, and JavaScript.',
        'Built responsive UI components using HTML, CSS, Tailwind CSS, and JavaScript.',
        'Practiced React concepts, including component-based structure and state handling.',
        'Worked with Git and GitHub for version control, branching, and collaboration.',
        'Participated in debugging, UI/UX improvements, and optimization',
        'Gained practical exposure to real development workflow and teamwork.'
    ]
}]


const Experience = () => {

    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        })
    }, {
        rootMargin:'0px 0px -150px 400px'
    });
    
    const left = document.querySelectorAll("#experience .experience-left");
    const right = document.querySelectorAll("#experience .experience-right");
    left.forEach(element => observer.observe(element))
    right.forEach(element => observer.observe(element))
    
    return () => observer.disconnect();
    }, []);
  return (
    <section id="experience" className='h-auto md:min-h-screen px-5 sm:px-20 lg:px-10 xl:px-35 w-full relative flex justify-center items-center text-2xl text-start font-inter flex-col pb-10'>
      <Header>Experience</Header>
      <p className="text-sm lg:text-2xl mb-4">
        Here is a glimpse of some of my experience...
      </p>
        <div className="w-full flex justify-center items-center flex-col gap-5">

            {experiences.map((experience, i)=> (
                <div key={i} className="bg-(--background) w-full h-auto lg:w-[70%] lg:min-h-50 rounded-2xl outline-2 outline-(--accent) flex max-lg:flex-col p-5 justify-between items-start gap-6 sm:gap-4 xl:gap-10 shadow-lg">
            
                    <div className="flex flex-col gap-1 font-bold w-full lg:w-1/3 experience-right">
                        <h3 className="font-bold text-[20px] flex flex-col gap-1 ">{experience.role}</h3>
                        <p className="text-(--accent-font) text-[18px] ">{experience.company}</p>
                        <p className="text-(--accent-font) text-[16px]">{experience.location}</p>
                        <p className="text-(--accent-font) text-[14px]">{experience.year}</p>
                    </div>

                    <div className="w-full lg:w-2/3 text-[20px] flex flex-col gap-3 experience-left">
                    
                        <ol className='custom-list text-[16px] list-image-[circle.png] leading-5 flex flex-col gap-2 list-inside'>
                            {experience.works.map((work, i) => (
                                <li key={i}>{work}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
            
        </div>
      
    </section>
  )
}

export default Experience
