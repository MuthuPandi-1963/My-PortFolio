import { useContext, useRef, useState } from "react"
import ThemeContext from "../context/themeContext"
import Review_star from './Review_star.jsx';
import {motion} from 'framer-motion';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig.js";

const stars =[false,false,false,false,false];
export default function Contact({img,setImg,setUpdatedReview,authMail,setViewImg}) {
    const {theme} = useContext(ThemeContext);
    const [error,setError] = useState(false)
    const [star,setStar] = useState(stars)
    const NameRef = useRef()
    const GmailRef = useRef()
    const PersonRef = useRef()
    const FeedBackRef = useRef()
    const Rating =star.filter(item=>item===true).length
    async function HandleSubmit(){
        const data ={
            Name:NameRef.current.value ? NameRef.current.value : null,
            Gmail:GmailRef.current.value ? GmailRef.current.value : null,
            Person:PersonRef.current.value ? PersonRef.current.value : null,
            FeedBack:FeedBackRef.current.value ? FeedBackRef.current.value:null,
            Rating:Rating,
            Date: new Date(),
            Image : img || 'https://firebasestorage.googleapis.com/v0/b/dummy-59bd8.firebasestorage.app/o/coder.png?alt=media&token=25975aba-a4b2-4643-95ef-e9b8f50b9ff3'
        }
        const IsAlready = authMail.filter(item=>item.Gmail == data.Gmail)
        if(IsAlready.length > 0){
          setError("Email is Already exists")
          setTimeout(()=>
            setError(null)
          ,3500)
          return;
        }
        if (!data.Name || !data.Gmail || !data.Person || !data.FeedBack || !data.Rating) {
          setError("Please fill out all fields before submitting.");
          setTimeout(()=>
            setError(null)
          ,3500)
          return;
        }
        
        try {
          // Reference to the Firestore collection
          const docRef = await addDoc(collection(db, "Reviews"), data);
          ResetForm()
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          console.error("Error adding document: ", error);
        }
        finally{
          console.log(data);
        }
        
    }
    function ResetForm(){
      NameRef.current.value = ""
      GmailRef.current.value=""
      FeedBackRef.current.value=""
      PersonRef.current.value =""
      setStar(stars)  
      setImg(null)
      setUpdatedReview(prev=>!prev)
      setViewImg(false)
    }
    console.log(authMail);
    
const classNameInput =`pl-2 flex-grow my-1 border-2 rounded placeholder:text-black placeholder:pl-2 h-8 mx-2
 ${theme ? 'border-black text-black' : 'border-black text-black'}`

    return(
                <div className="grid  md:mx-1 w-full
                 md:flex flex-col px-1 lg:px-10">
                 {error && <motion.p 
                 initial={{y:-100,opacity:0}}
                 animate={{y:0,opacity:1,transition:{ease:'easeInOut',duration:1,delay:0.2}}}
                 className={`w-3/4 mx-auto fixed bg-orange-400 py-2 top-[20%] text-black text-center rounded-md font-bold  px-4 md:px-16 flex items-center border ${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'}`}>{error} and try Again</motion.p>}
                    <h1 className="text-center text-2xl font-semibold mt-2">Write a Review❤️</h1>
                    <Review_star className ={"md:justify-self-end"} star={star} stars={stars} setStar={setStar}  />
                    <input type="text" placeholder={`Enter a Name`}  className={classNameInput} ref={NameRef}/>
                    <input type="email" placeholder={`Enter a Email Address`}  className={classNameInput} ref={GmailRef}/>
                    <input type="email" placeholder={`You are my...(Ex : Student,Junior..)`}  className={classNameInput} ref={PersonRef}/>
                    <textarea type="text" placeholder={`Enter a feedback and Give me a Honest Review`} ref={FeedBackRef} className={`pl-4 md:flex-grow mx-2 h-20 my-1 rounded-md border-2 placeholder:text-black  text-black ${theme ?  'border-black' : ' border-black'}`}></textarea>
                    <button onClick={HandleSubmit} className=" bg-orange-600 hover:bg-orange-400  my-2 py-1 px-4 mx-2 rounded-md text-md cursor-pointer" type="submit">Post now</button>
                    </div>
        )
    };
