export function Services() {
    return (
        <div className="h-screen bg-color0 px-5 flex flex-col items-center justify-center ">
            <p className="text-color5 text-3xl md:text-5xl font-semibold border-b-2 border-orange md:py-4 py-2 md:w-[8rem] w-[5rem] ">Services</p>
            <div className="mt-10 flex md:flex-row flex-col flex-wrap md:space-y-5 md:space-x-5 justify-center place-items-center ">

                <div className="w-[20rem] h-[10rem] md:h-[15rem] p-5 border-b-2 md:border-b-0 md:border-r-2 md:mt-5 border-color2 text-center items-center flex flex-col justify-center ">
                    <p className="text-color5 font-semibold text-center" >Frontend Developer</p>
                    <p className="text-color5 " >Technology Stack : HTML,CSS,Tailwind CSS , React</p>
                </div>
                <div className="w-[20rem] h-[10rem] md:h-[15rem] p-5 border-b-2 md:border-b-0 md:border-r-2 border-color2 text-center items-center flex flex-col justify-center ">
                    <p className="text-color5 font-semibold text-center" >Backend Developer</p>
                    <p className="text-color5 " >Technology Stack : Python Django,Express/Node(Basics)</p>
                </div>
                <div className="w-[20rem] h-[10rem] md:h-[15rem] p-5 border-b-2 md:border-b-0 md:border-t-2 lg:border-t-0 text-center lg:border-r-2 border-color2 items-center flex flex-col justify-center ">
                    <p className="text-color5 font-semibold text-center" >Flutter Developer (Beginner)</p>
                    <p className="text-color5 " >Technology Stack : Flutter/Dart</p>
                </div>

            </div>
        </div>  
   );
}