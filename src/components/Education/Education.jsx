import education from './Education.js';

export default function Education() {
    return (
        <div className="md:w-3/4 w-[90%] mx-auto pb-10" id="education">
            <h1 className="text-3xl text-center md:text-5xl font-bold my-12">Education</h1>

            {education.map(({ degree, institution, gpa, duration, location,degreeInSmall }, id) => (
                <div key={id} className="md:px-10 md:py-8  grid border-2 border-gray-800 p-4 rounded-2xl md:flex md:flex-nowrap justify-between  md:gap-x-20 my-4">
                    <d  iv className="grid justify-center">
                        <h2 className="font-black text-2xl md:text-md mb-2 hidden lg:block">{degree}</h2>
                        <h2 className="font-black text-2xl mb-2 lg:hidden block">{degreeInSmall}</h2>
                        {/* <div className="grid"> */}
                        <p className="lg:indent-16 text-[16px] tracking-tighter">{institution}</p>
                        <p className="lg:indent-16 text-[14px] mt-1 font-semibold text-gray-600">{location}</p>
                        {/* </div> */}
                    </d>
                    <div className="grid content-start">
                    <p className="font-bold whitespace-nowrap self-start">{duration}</p>
                    <p className="indent-16 text-[18px] mt-1 text-blue-800 font-bold">GPA: {gpa}</p>
                    </div>  

                </div>
            ))}
        </div>
    );
}
