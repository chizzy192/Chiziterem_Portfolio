import { useEffect } from "react";
import Socials from "./Socials"
import '../components/style.css'

const Home = () => {
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
    
    const spans = document.querySelectorAll("#home article .slide-in");

    spans.forEach(span=>observer.observe(span))

    return () => observer.disconnect();
    }, []);

    return (
        <section id='home' className='h-screen px-10 sm:px-20 lg:px-35 w-full relative flex justify-center items-center text-4xl text-center font-inter flex-col'>
            <article className="flex justify-center items-center flex-col gap-10 h-2/3">
                <h1 className=" block text-4xl lg:text-6xl font-mono font-medium">Heya!</h1> 
                <div className="slide-in flex flex-col justify-center items-center gap-5">
                    <div className="">My name is <span className="text-(--accent) font-mono font-medium">Chiziterem Eze.</span></div> <span className="block leading-13 slide-in">
                        I am a <span className="text-(--accent) font-mono font-medium">Web Developer (Frontend)</span><span className="hidden lg:flex">
                            who loves turning ideas into smooth, interactive, and beautiful experiences. Always curious, always building, and always having fun along the way.
                        </span>
                    </span>
                </div>
                <div className="slide-in">
                    <div className=" flex flex-col justify-center items-center gap-3 w-full">
                        <a href="../../public/Chiziterem_Eze_CV.docx" download="Chiziterem_Eze_CV.docx" className="text-sm bg-(--accent) p-3 rounded-2xl cursor-pointer hover:bg-(--accent-font) active:scale-80 transition-all w-auto text-white font-bold flex justify-center items-center hover:scale-110">
                            DOWNLOAD RESUME
                        </a>
                        <Socials/>
                    </div>   
                </div>

            
            </article>
        </section>
    )
}

export default Home
