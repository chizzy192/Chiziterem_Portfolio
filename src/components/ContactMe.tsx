
import { Loader, Send } from "lucide-react"
import FormInput from "./FormInput"
import Header from "./Header"
import Socials from "./Socials"
import { useEffect, useState } from "react"
import { supabase } from "../SupabaseClient"


const ContactMe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription]=useState("");
    const [loading, setLoading]= useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const {error} = await supabase.from("Messages").insert({name: name, email: email, description: description}).single();
        
        if (error) {
            console.error("Error submitting report", error.message);
        } else{
            setName("");
            setEmail("");
            setDescription("");
        }

        setLoading(false);
    }

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
    
    const left = document.querySelectorAll("#contact .contact-left");
    const right = document.querySelectorAll("#contact .contact-right");
    left.forEach(element => observer.observe(element))
    right.forEach(element => observer.observe(element))
    
    return () => observer.disconnect();
    }, []);

    
  return (
    <section id="contact" className='h-auto md:min-h-screen px-5 sm:px-20 lg:px-10 xl:px-35 w-full relative flex justify-center items-center text-2xl text-start font-inter flex-col pb-40 md:mb-30 xl:pb-20'>
      <Header>Get In Touch</Header>

      <div className="bg-(--background) w-full h-auto lg:w-[70%] lg:h-105 rounded-2xl outline-2 outline-(--accent) flex max-lg:flex-col p-2.5 sm:p-5 lg:p-4 xl:p-8 justify-between items-center gap-6 sm:gap-4 xl:gap-10 shadow-lg">
        <div className="contact-right bg-(--accent-bg) rounded-2xl lg:w-[50%] h-full p-5 flex flex-col gap-5 justify-between ">
            <div className="w-full h-full flex flex-col gap-5 justify-between ">
                <div className="font-bold flex flex-col gap-1 ">
                    Get In Touch
                    <div className="outline-2 outline-(--accent-font) w-1/2 sm:w-2/5 lg:w-2/3"></div>
                </div>

                <p className="text-sm"> 
                    I'm always excited to connect about new opportunities and collaborations. Reach out through any of these platforms:
                </p>
                <Socials/>

                <p className="text-sm flex justify-start">
                    you can also send a message here 
                </p>
            </div>
        </div>
        
        <div className="contact-left  rounded-2xl w-full h-full">
            <div className=" rounded-2xl w-full h-full gap-5 flex flex-col justify-between ">
                <div className="font-bold flex flex-col gap-1 ">
                    Send a Message
                    <div className="outline-2 outline-(--accent-font) w-1/2 sm:w-2/5 lg:w-3/8"></div>
                </div>
                <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between gap-5">
                    <FormInput 
                        placeholder="Name" 
                        type="text" 
                        onChange={(e)=> setName(e.target.value)} 
                        value={name}
                    /> 

                    <FormInput 
                        placeholder="Email" 
                        type="email" 
                        onChange={(e)=> setEmail(e.target.value)} 
                        value={email}
                    />
                    <textarea 
                        className="w-full bg-(--accent-bg) h-auto  border-0 text-[16px] p-2 rounded-xl focus:rounded-xl flex px-2 hover:outline-3 focus-within:outline-3 outline-(--accent) shadow-xs items-center" 
                        required 
                        placeholder="Type your message" 
                        onChange={(e)=> setDescription(e.target.value)} 
                        value={description}
                    />
                    <button 
                        className=" text-white hover:bg-(--accent-font) active:scale-90 cursor-pointer rounded-xl p-2 bg-(--accent) shadow-md flex w-auto justify-center items-center disabled:bg-(--accent-font) text-lg" disabled={loading}
                    >
                        {loading ? (<Loader/>) : (
                            <span className="flex w-auto justify-center items-center gap-2">
                                Send Message <Send className="w-5 h-5"/>
                            </span>
                        )}
                        
                    </button>
                </form> 
            </div>
        </div>
       
      </div>
    </section>
  )
}

export default ContactMe
