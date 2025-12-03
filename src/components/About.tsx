import Header from "./Header";
import { useEffect } from "react";
import '../components/style.css'

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach(entry=> {
        if(entry.isIntersecting) {
            entry.target.classList.add("show")
        }
      })
    }, {
        rootMargin:'0px 0px -300px 400px'
    });
    
    const spans = document.querySelectorAll("#about article span");

    spans.forEach(span=>observer.observe(span))

    
    return () => observer.disconnect();
  }, []);

  return (
    <section    
      id="about" 
      className='flex px-10 sm:px-20 lg:px-27 xl:px-35 text-center text-2xl font-inter flex-col justify-center items-center h-auto xl:h-screen pb-10'
    >
      <Header>Who I am...</Header>
      <article className="flex justify-center flex-col gap-3 items-center xl:w-2/3 font-inter text-md md:text-3xl text-center">
        <span>
          I'm a web developer who genuinely enjoys creating things that look good, feel smooth, and make people smile a little when they use them. I love taking simple ideas and turning them into clean, interactive experiences, the kind that feel effortless but still have personality.
        </span>
        <span>
          I'm always exploring something new, whether it's a fresh design style, a cool animation, or just a random idea that pops into my head at 2AM. I like to think of myself as a curious builder; someone who loves learning, experimenting, and making everyday things feel a bit more beautiful.
        </span>
        
        <span>
          When I'm not coding, you'll probably find me lost in music, relaxing with something creative, or discovering new ways to recharge and stay inspired. I'm all about growth, expression, and having fun with whatever I make, and I'm excited for everything I'll create next.
        </span>
      </article>
    </section>
  )
}

export default About
