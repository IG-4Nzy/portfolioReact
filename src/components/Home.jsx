import { Navbar } from "../components/Navbar";
import { Socialmedias } from "./Socialmedias";


export function Home() {
    return (
        <section className="bg-color1 h-screen px-[4rem]">
            <Navbar />
            <div className="flex items-center lg:mt-10 justify-around flex-col lg:flex-row  md:space-y-5 lg:space-y-0 ">
                <div>
                    <img src="images/athul.png" alt="profile"className="md:w-[25rem] md:h-[30rem] lg:w-[25rem]  lg:h-[35rem] rounded-b-full "></img>
                </div>
                <div className="text-center lg:text-start md:space-y-5">
                    <p className="md:text-5xl lg:text-9xl font-semibold text-color5 text-4xl">Hi ,I'm <span className="text-orange font-bold">Athul</span> </p>
                    <p className="md:text-2xl lg:text-5xl md:font-semibold text-color5 text-xl "><span className="hidden md:inline ">I'm a</span> <span className="md:text-orange font-bold ">Software Devolper (Fresher)</span></p>
                        <p className="text-color5 text-justify hidden lg:flex w-[46rem] text-xl">
                        As a recent graduate in computer science, my enthusiasm for software engineering is matched only by my eagerness to learn and contribute to the field. While I lack extensive industry experience, I bring a fresh perspective, strong problem-solving skills, and a solid foundation in programming languages and development methodologies. I am driven by the opportunity to apply my knowledge to real-world projects that make a positive impact, and I am committed to continuous learning and growth. My goal is to build a successful career in software engineering, leveraging my passion for innovation to leave a lasting mark in this dynamic and ever-evolving industry.
                    </p>
                    <div className="hidden lg:flex">
                        <Socialmedias />
                    </div>
                    
                </div>
                <p className="text-color5 text-justify lg:hidden hidden md:flex">
                    As a recent graduate in computer science, my enthusiasm for software engineering is matched only by my eagerness to learn and contribute to the field. While I lack extensive industry experience, I bring a fresh perspective, strong problem-solving skills, and a solid foundation in programming languages and development methodologies. I am driven by the opportunity to apply my knowledge to real-world projects that make a positive impact, and I am committed to continuous learning and growth. My goal is to build a successful career in software engineering, leveraging my passion for innovation to leave a lasting mark in this dynamic and ever-evolving industry.
                </p>
                <p className="text-color5 text-justify hidden mt-2 ">
                    As a recent computer science graduate, I'm eager to contribute to software engineering with my fresh perspective, strong problem-solving skills, and programming expertise. My goal is to make a positive impact through real-world projects, fueled by continuous learning and innovation.
                </p>   
            </div>
            <div className="lg:hidden">
                <Socialmedias />
            </div>
            
        </section>
    );
}