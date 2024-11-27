export default function Experience() {
    const experienceSkills =[ "Frontend & Backend Development","MERN & Python Full-Stack","Problem-Solving" , "Hands-on Projects"]
    return(
        <div className="w-3/4 mx-auto pb-10" id="experience">
            <h1 className="text-3xl text-center md:text-5xl font-bold my-12">Work Experience</h1>
            <div className="grid border-2 border-gray-800 p-4 rounded-2xl md:flex md:flex-nowrap justify-evenly items-center md:gap-x-20">
                <p className="font-bold my-1 whitespace-nowrap self-start" ><span className=""></span>2024 - Present</p>
                <div className="grid justify-center">
                    <h1 className="font-black text-2xl mb-2">Technical Trainee - Networkz Systems</h1>
                    <p className="indent-12 text-[16px] tracking-tighter ">As a Technical Trainer, I teach students how to build full-stack web applications using the MERN stack (MongoDB, Express, React, Node.js) and Python. I help students understand both frontend and backend technologies, guiding them through hands-on projects and real-world examples. My approach is to explain complex topics in simple terms so that every student can follow along. I also cover important concepts like data structures, algorithms, and how to connect the frontend and backend in full-stack development.</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 my-4">{experienceSkills.map((item,id)=> (
                        <p key={id} className="text-[12px] bg-cyan-800 font-semibold px-2 py-1 rounded-lg whitespace-nowrap">{item}</p>
                    ))}</div>
                </div>
        </div>
        </div>
    )
};
