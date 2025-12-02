import { Github, Linkedin } from "lucide-react"

const Socials = () => {
  return (
                    <div className="flex gap-3">
                    <a 
                        href="http://github.com/chizzy192" 
                        target="_blank" 
                        className="w-10 h-10 bg-(--accent) flex justify-center rounded-3xl items-center hover:bg-(--accent-font) active:scale-80 transition-all hover:scale-120"
                    >
                        <Github className=" w-6 h-6 text-white"/>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/chiziterem-eze-665b45256/" 
                        className="w-10 h-10 bg-(--accent) flex justify-center rounded-3xl items-center hover:bg-(--accent-font) active:scale-80 transition-all hover:scale-120" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <Linkedin className=" w-6 h-6 text-white"/>
                    </a>
                    <a 
                        href="http://x.com/ezechiziterem" 
                        className="w-10 h-10 bg-(--accent) flex justify-center rounded-3xl items-center hover:bg-(--accent-font) active:scale-80 transition-all hover:scale-120" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-twitter-x w-6 h-6 text-white" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="16" width="16">
                            <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" stroke-width="1"></path>
                        </svg>
                    </a>
                </div> 
  )
}

export default Socials
