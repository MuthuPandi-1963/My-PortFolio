import { useContext, useState } from "react";
import ThemeContext from "../context/themeContext";
import Review from "./Review";
import Contact from "./Contact";
import { button } from "framer-motion/client";
const images = ["avatar-1.png","avatar-2.png","avatar-3.png","avatar-4.png","avatar-5.png","avatar-6.png","avatar-7.png","avatar-8.png","avatar-9.png","avatar-10.png","avatar-11.png","avatar-12.png","avatar-13.png","avatar-14.png","avatar-15.png","avatar-16.png","avatar-17.png","avatar-18.png",
    "image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg","image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg","image-15.jpg","image-16.jpg",
]
export default function Star() {
    const [img,setImg] =useState(null)
    const {theme} = useContext(ThemeContext);
    const [updateReview,setUpdatedReview] = useState(false)
    const [authEmail,setAuthEmail] =useState()
    const [viewImg,setViewImg] =useState(false)
    const [profile,setProfile] =useState(false)
    console.log(img);
    function HandleClick(item){
        setImg(item)
        setViewImg(prev=>!prev)
        setProfile(true)
    }
    
    return (
        <>
        <div className={`w-[80%] mx-auto rounded-lg my-4  md:p-6 py-8  border ${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'}`}>
           <div className="w-full mx-auto md:flex ">
            <div className=" grid">
                <div className="justify-self-center flex items-center gap-x-4">
                <p className="text-xl md:text-2xl justify-self-center  my-2">choose Profile Picture </p>
                <button className="down justify-self-center  rounded-xl  "><img src="Icons/down.svg" alt=""/></button></div>
                {viewImg &&  (
                     <div className="flex items-center gap-3 flex-wrap w-96 justify-center h-96 md:h-96 overflow-y-scroll">
                        {images.map((item,id)=>(
                            <button className={` rounded-full ${theme ? ' shadow-md hover:shadow-blue-700 border-gray-500':' hover:box-shadow-lg-dark'}`} onClick={()=>HandleClick(item)}><img src={`avatar/${item}`} alt={item} className="w-16 h-16 rounded-full object-cover" /></button>
                        ))}
                     </div>
                )}
     {img && profile && <button><img src={`avatar/${img}`} alt="Source"  className="w-[80%] h-60 m-2 object-cover md:w-[500px] md:h-[300px] rounded-xl justify-self-center hover:box-shadow-lg-dark hover:opacity-60"/></button>}
    {!viewImg && !profile && <button onClick={()=>setViewImg(true)}><img src="images/coder.avif" alt="coder" className="hover:box-shadow-lg-dark hover:opacity-60 rounded-xl justify-self-center w-full" /></button> }
     </div>
      <Contact img={img}  setImg={setImg} setUpdatedReview={setUpdatedReview} AuthEmail={authEmail} setViewImg={setViewImg} setProfile={setProfile}/>
            </div> 
        </div>
        <Review updateReview={updateReview} setAuthEmail={setAuthEmail} />
        </>

    )
};