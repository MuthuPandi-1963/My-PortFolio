import experience from './Experience';
export default function Experience() {
    return (
        <div className="w-3/4 mx-auto pb-10" id="experience">
            <h1 className="text-3xl text-center md:text-5xl font-bold my-12">Work Experience</h1>

            {experience.map(({duration,companyName,description,skills},id) =>(
            <div key={id} className="grid border-2 border-gray-800 p-4 rounded-2xl md:flex md:flex-nowrap justify-evenly items-center md:gap-x-20">
                <p className="font-bold my-1 whitespace-nowrap self-start" >{duration}</p>
                <div className="grid justify-center">
                    <h1 className="font-black text-2xl mb-2">{companyName}</h1>
                    <p className="indent-12 text-[16px] tracking-tighter ">{description}</p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2 my-4">
                        {skills.map((item,id)=> (
                        <p key={id} className="text-[12px] bg-cyan-800 font-semibold px-2 py-1 rounded-lg whitespace-nowrap">{item}</p>
                    ))}
                    </div>
                </div>
        </div>

        ))}
        </div>
    )
};
