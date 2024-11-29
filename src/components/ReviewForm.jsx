import { useContext, useState } from "react";
import Contact from "./Contact";
import ThemeContext from "../context/themeContext";
import Review from "./Review";

export default function ReviewForm() {
    const [img,setImg] =useState(null)
    const {theme} = useContext(ThemeContext);
    const [updateReview,setUpdatedReview] = useState(false)
    const [authEmail,setAuthEmail] =useState()
    console.log(img);
    
    return (
        <>
        <div className={`w-[80%] mx-auto rounded-lg my-4  md:p-6 py-8  border ${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'}`}>
           <div className="w-full mx-auto md:flex relative ">
     {img ? <img src={img} alt="Source"  className="md:w-60 w-[80%] lg:w-80 rounded-xl justify-self-center "/> :<img src="images/coder.avif" alt="coder" className=" rounded-xl justify-self-center md:w-60 w-[80%] lg:w-80 " /> }
      <Contact img={img}  setImg={setImg} setUpdatedReview={setUpdatedReview} AuthEmail={authEmail}/>
            </div> 
        </div>
        <Review updateReview={updateReview} setAuthEmail={setAuthEmail} />
        </>

    )
};

// export const ReviewCtx = createContext();