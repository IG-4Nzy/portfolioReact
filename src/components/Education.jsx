export function Education() {
    return (
        <div className="h-screen bg-color0 flex justify-center items-center flex-col pt-10">
            
            <p className="text-color5 font-semibold text-3xl pt-5 border-b-2 border-orange">Education</p>
            <div className="h-full flex items-center flex-col md:flex-row m-5">
                <div className="md:gap-48 flex flex-col">
                    <div>
                        <div className="bg-orange p-5 m-5 text-color5">
                            <p>Diploma in Computer Engineering</p>
                            <p>Central Polytechnic College</p>
                            <p>2021 - 2024</p>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="bg-orange p-5 m-5 text-color5">
                            <p>Field Technician and Computing Pheripharals </p>
                            <p>Govt VHSE,Mancha</p>
                            <p>2019 - 2021</p>
                        </div>
                    </div>
                    <div className="hidden md:block" >
                        <div className="bg-orange p-5 m-5 text-color5">
                            <p>Two And Three Wheeler / Auto Electrical & Electronics</p>
                            <p>Govt THS,Mancha</p>
                            <p>2017 - 2019</p>
                        </div>
                    </div>
                </div>
                {/* center line  */}
                <div className="h-[80%] bg-orange w-[0.5rem] hidden md:block"></div>
                <div>
                    <div className="bg-orange p-5 m-5 text-color5 hidden md:block">
                        <p>Field Technician and Computing Pheripharals </p>
                        <p>Govt VHSE,Mancha</p>
                        <p>2019 - 2021</p>
                    </div>
                </div>
                <div className="md:hidden" >
                    <div className="bg-orange p-5 m-5 text-color5">
                        <p>Two And Three Wheeler / Auto Electrical & Electronics</p>
                        <p>Govt THS,Mancha</p>
                        <p>2017 - 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}