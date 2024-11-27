import PropTypes from "prop-types"
import { useContext } from "react"
import ThemeContext from "../context/themeContext";

export function Contact() {
    const {theme } = useContext(ThemeContext)
return(
        <div className="w-[90%] md:w-3/4 mx-auto mb-20 ">
            <h1 className="text-3xl text-center md:text-5xl font-bold mb-4 mt-4 md:mt-12">Contact Me</h1>
            <div className={`w-full grid border-2 rounded-lg gap-y-3  md:p-6 py-8 px-4 ${theme ? 'box-shadow-lg-light' : 'box-shadow-lg-dark'}`}>
                {/* <h1>FeedBack</h1> */}
                <Input type={"text"} name="Name" fieldTag="input"/>
                <Input type={"email"} name="Email" fieldTag="input"/>
                <Input type={"text"} name="Feedback" fieldTag="textarea"/>
                <button className="bg-blue-600 font-bold text-2xl md:mx-6 py-2 rounded-md ring-1 cursor-pointer">Contact now</button>
            </div>
        </div>
    )
};

export  function Input({type,name,fieldTag}) {
    const {theme} = useContext(ThemeContext)
    return(
        <div className="grid items-center gap-x-4 w-full  md:px-6">
            {/* <label htmlFor={name} className={`w-1/4 ${fieldTag === 'textarea' ? 'self-start':''} whitespace-nowrap`}>{name} : </label> */}
            {fieldTag === "input" ? (<input type={type} placeholder={`Enter a ${name ==='Email' ? 'email address' : name }`} id={name} className={`flex-grow  border-2 rounded placeholder:text-black placeholder:pl-2 h-8 ${theme ? 'border-black' : 'border-black'}`}/>) :
            <textarea name="" id="feedback" placeholder={`Enter a ${name}`} className={`flex-grow  h-20 rounded-md border-2 placeholder:text-black pl-2  ${theme ?  'border-black' : ' border-black'}`}></textarea> }
        </div>
    )
};
Input.propTypes ={
    type : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    fieldTag : PropTypes.string.isRequired
}
export default Contact;