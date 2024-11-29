import PropTypes from "prop-types"
import { useContext, useState ,useRef} from "react"
import ThemeContext from "../context/themeContext";
import getTimeAgo from "../firebase/time";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebase/firebaseconfig";
import {motion} from 'framer-motion';
import Review_star from "./Review_star";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
const stars = [false, false, false, false, false]
export function Contact({img,setImg,setUpdatedReview , AuthEmail,setViewImg,setProfile}) {
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
    async function handleImgChange(event) {
        const file = event.target.files[0];
        if (file) {
            // Check if the file is an image
            if (!file.type.startsWith("image/")) {
                setError("Please upload a valid image file.");
                setTimeout(() => {
                    setError(null);
                }, 3500);
                return;
            }
    
            try {
                // Generate a temporary preview URL for immediate display
                setImg(URL.createObjectURL(file));
    
                // Create a unique path for the file
                const storageRef = ref(storage, `images/${file.name}`);
    
                // Upload the image to Firebase Storage
                await uploadBytes(storageRef, file);
    
                // Get the public URL for the uploaded image
                const downloadURL = await getDownloadURL(storageRef);
                setSelectedImage(downloadURL);
            } catch (error) {
                setError("Error uploading image.");
                setTimeout(() => {
                    setError(null);
                }, 3500);
            }
        }
    }        
    async function HandleClick() {
        const Name = NameRef.current.value;
        const Gmail = GmailRef.current.value;
        const FeedBack = FeedBackRef.current.value;
        const Person = PersonRef.current.value || 'unKnown';
        
        // Validate Inputs
        const validations = [
            { condition: !Name.trim(), message: "Name is Empty or Invalid!" },
            { condition: !FeedBack.trim(), message: "Feedback is Empty or Invalid!" },
            { condition: StarCount <= 0, message: "Rating is required!" },
            { condition: AuthEmail.some(r => r.Gmail === Gmail), message: "Gmail already exists!" }
        ];
    
        for (let { condition, message } of validations) {
            if (condition) {
                setError(message);
                setTimeout(() => setError(null), 3500);
                return;
            }
        }
    
        // Save feedback to Firestore
        const feedbackData = {
            Name,
            Gmail,
            FeedBack,
            Rating: StarCount,
            Image: img || null,
            Date: new Date()
        };
    
        try {
            await addDoc(collection(db, "Reviews"), feedbackData);
            setUpdatedReview(prevReview => !prevReview);
            
            // Clear form after successful submission
            resetForm();
        } catch (error) {
            setError("Error submitting the review.");
            setTimeout(() => setError(null), 3500);
        }
    }
    
    // Reset form fields after submission
    function resetForm() {
        NameRef.current.value = "";
        GmailRef.current.value = "";
        FeedBackRef.current.value = "";
        PersonRef.current.value = "";
        setStar(stars);
        setSelectedImage(null);
        setImg(null);
        setViewImg(false)
        setProfile(false)
        if (FileInputRef.current) FileInputRef.current.value = "";
    }
    
    
    const classNameInput =`pl-2 flex-grow my-1 border-2 rounded placeholder:text-black placeholder:pl-2 h-8 mx-2 ${theme ? 'border-black text-black' : 'border-black text-black'}`
return(
        // <div className="w-[90%] md:w-3/4 mx-auto mb-20 ">
        //     <h1 className="text-3xl text-center md:text-5xl font-bold mb-4 mt-4 md:mt-12">Contact Me</h1>
            <div className=" md:mx-1 w-full
             md:flex flex-col px-1 lg:px-10">
             {error && <motion.p 
             initial={{y:-100,opacity:0}}
             animate={{y:0,opacity:1,transition:{ease:'easeInOut',duration:1,delay:0.2}}}
             className={`w-3/4 mx-auto fixed bg-orange-400 py-2 top-[20%] text-black text-center rounded-md font-bold  px-4 md:px-16 flex items-center border ${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'}`}>{error} and try Again</motion.p>}
                <h1 className="text-center text-2xl font-semibold mt-2">Write a Review❤️</h1>
                <Review_star className ={"md:justify-self-end"} star={star} stars={stars} setStar={setStar}  />
                {/* <div className="ml-2 my-2">
                <label htmlFor=""  >Profile  Picture : </label>
                <input type="file" accept="image/*" className="mt-2" ref={FileInputRef} onChange={(e)=>handleImgChange(e)} />
                </div> */}
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