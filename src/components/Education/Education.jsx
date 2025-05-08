import education from './Education.js';

export default function Education() {
    return (
        <div className="md:w-3/4 w-[90%] mx-auto pb-10" id="education">
            <h1 className="text-3xl text-center md:text-5xl font-bold my-12">Education</h1>

            {education.map(({ degree, institution, gpa, duration, location, degreeInSmall }, id) => (
                <div key={id} className="md:px-10 md:py-8 grid border-2 border-gray-800 p-4 rounded-2xl md:flex md:justify-between md:gap-x-20 my-4">
                    {/* Left Section */}
                    <div className="grid">
                        {/* Desktop Degree Title */}
                        <h2 className="font-black text-2xl mb-2 hidden lg:block">
                            {degree}
                        </h2>
                        {/* Mobile Degree Title + Duration */}
                        <h2 className="font-black text-2xl mb-2 lg:hidden block">
                            {degreeInSmall}
                            <span className="block text-sm font-bold text-gray-500">{duration}</span>
                        </h2>

                        <p className="text-[16px] tracking-tight">{institution}</p>
                        <p className="text-[14px] mt-1 font-semibold text-gray-600">{location}</p>
                    </div>

                    {/* Right Section */}
                    <div className="grid content-start text-right">
                        <p className="font-bold whitespace-nowrap hidden lg:block">{duration}</p>
                        <p className="text-[18px] mt-1 text-blue-800 font-bold">GPA: {gpa}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
