import PropTypes from "prop-types"
import { useContext, useState ,useRef} from "react"
import ThemeContext from "../context/themeContext";
import getTimeAgo from "../firebase/time";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
import {motion} from 'framer-motion';
import Review_star from "./Review_star";
const stars = [false, false, false, false, false]
export function Contact({img,setImg,setUpdatedReview , AuthEmail}) {
    const {theme} = useContext(ThemeContext)
    const [star, setStar] = useState(stars);
    const [selectedImage , setSelectedImage] = useState(null);
    const [handleData,setHandleData]= useState({name:"",email:"",feedback:"",rating:0})
    const [error , setError] =useState()
    const NameRef =useRef()
    const GmailRef =useRef()
    const FeedBackRef =useRef()
    const PersonRef =useRef()
    const FileInputRef = useRef()
    const StarCount = star.filter(item=>item==true).length
    // console.log(StarCount);
    function handleImgChange(event){
        const file = event.target.files[0];
        if(file){
            setImg(URL.createObjectURL(file));
            setSelectedImage(URL.createObjectURL(file));
        }
    }
    async function HandleClick(){
        const Name =NameRef.current.value 
        const Gmail =GmailRef.current.value;
        const FeedBack =FeedBackRef.current.value;
        const Person =PersonRef.current.value ? PersonRef.current.value :'unKnown' ;
        console.log(AuthEmail);
        
        const existingEmail = AuthEmail.find((r)=>r.Gmail==Gmail)
        console.log(existingEmail);
        
        if( existingEmail){
            setError("Gmail is already exists ") ;
            setTimeout(()=>{
                setError(null)
            },3500)
            return;
        } 
        if(!Name.trim()){
            setError("Name is Empty or Invalid ! ");
            setTimeout(()=>{
                setError(null)
            },3500)
            return;
        } 
        if(!FeedBack.trim()){
            setError("FeedBack  is Empty or Invalid !") ;
            setTimeout(()=>{
                setError(null)
            },3500)
            return;
        } 
        if(StarCount <=0){
            setError("Rating is Enter as 0 !") ;
            setTimeout(()=>{
                setError(null)
            },3500)
            return;
        } 

        const feedbackData ={
            Name,Gmail,FeedBack,Rating:StarCount,
            Image :selectedImage ? selectedImage : null,
            Date : new Date()
        }
        await addDoc(collection(db, "Reviews"), feedbackData);
        setUpdatedReview(prevReview=>!prevReview)
        NameRef.current.value ="";
        GmailRef.current.value ="";
        FeedBackRef.current.value ="";
        PersonRef.current.value ="";
        setStar(stars)
        setSelectedImage(prev=>null)
        setImg(null)
        if(FileInputRef.current) FileInputRef.current.value ="";

    }
    
    const classNameInput =`pl-2 flex-grow my-1 border-2 rounded placeholder:text-black placeholder:pl-2 h-8 mx-2 ${theme ? 'border-black text-black' : 'border-black text-black'}`
return(
        // <div className="w-[90%] md:w-3/4 mx-auto mb-20 ">
        //     <h1 className="text-3xl text-center md:text-5xl font-bold mb-4 mt-4 md:mt-12">Contact Me</h1>
            <div className=" md:mx-5 w-full
             flex flex-col px-2 md:px-10">
             {error && <motion.p 
             initial={{y:-100,opacity:0}}
             animate={{y:0,opacity:1,transition:{ease:'easeInOut',duration:1,delay:0.2}}}
             className={`w-3/4 mx-auto fixed bg-orange-400 py-2 top-[20%] text-black text-center rounded-md font-bold  px-4 md:px-16 flex items-center border ${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'}`}>{error} and try Again</motion.p>}
                <h1 className="text-center text-2xl font-semibold mt-2">Write a Review❤️</h1>
                <Review_star className ={"md:justify-self-end"} star={star} stars={stars} setStar={setStar}  />
                <div className="ml-2 my-2">
                <label htmlFor=""  >Profile  Picture : </label>
                <input type="file" accept="image/*" className="mt-2" ref={FileInputRef} onChange={(e)=>handleImgChange(e)} />
                </div>
                <input type="text" placeholder={`Enter a Name`}  className={classNameInput} ref={NameRef}/>
                <input type="email" placeholder={`Enter a Email Address`}  className={classNameInput} ref={GmailRef}/>
                <input type="email" placeholder={`You are my...(Ex : Student,Junior..)`}  className={classNameInput} ref={PersonRef}/>
                <textarea type="text" placeholder={`Enter a feedback`} ref={FeedBackRef} className={` md:flex-grow mx-2 h-20 my-1 rounded-md border-2 placeholder:text-black pl-2 text-black ${theme ?  'border-black' : ' border-black'}`}></textarea>
                {/* <Input type={"email"} name="Email" fieldTag="input"/>
                <Input type={"text"} name="Feedback" fieldTag="textarea"/> */}
               
                <button onClick={HandleClick} className=" bg-orange-600 hover:bg-orange-400  my-2 py-1 px-4 mx-2 rounded-md text-md cursor-pointer" type="submit">Post now</button>
                </div>
        // </div>
    )
};

// export  function Input({type,name,fieldTag}) {
//     const {theme} = useContext(ThemeContext)
//     return(
//         <div className="flex my-2">
//             {/* <label htmlFor={name} className={`w-1/4 ${fieldTag === 'textarea' ? 'self-start':''} whitespace-nowrap`}>{name} : </label> */}
//             {fieldTag === "input" ? (:
//             <textarea name="" id="feedback" placeholder={`Enter a ${name}`} ></textarea> }
//         </div>
//     )
// };
// Input.propTypes ={
//     type : PropTypes.string.isRequired,
//     name : PropTypes.string.isRequired,
//     fieldTag : PropTypes.string.isRequired
// }
export default Contact;