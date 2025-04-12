import { useContext, useRef, useState } from "react";
import ThemeContext from "../ColorTheme/themeContext.jsx";
import Review_Star from "./Review_Star.jsx";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig.js";

const stars = [false, false, false, false, false];

export default function Review_Form({ img, setImg, setUpdatedReview, authMail, setViewImg }) {
  const { theme } = useContext(ThemeContext);
  const [error, setError] = useState(false);
  const [star, setStar] = useState(stars);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("")
  
  const NameRef = useRef();
  const GmailRef = useRef();
  const PersonRef = useRef();
  const FeedBackRef = useRef();

  const Rating = star.filter(item => item === true).length;

  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3500);
  };
  
  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(""), 3000);
  };  

  const HandleSubmit = async () => {
    setLoading(true);

    const data = {
      Name: NameRef.current.value || null,
      Gmail: GmailRef.current.value || null,
      Person: PersonRef.current.value || null,
      FeedBack: FeedBackRef.current.value || null,
      Rating,
      Date: new Date(),
      Image: img || import.meta.env.VITE_DEFAULT_PROFILE_URL,
    };

    if (!data.Name || !data.Gmail || !data.Person || !data.FeedBack || !data.Rating) {
      showError("Oops! Please fill in all the fields before submitting your review.");
      return setLoading(false);
    }
    
    if (!data.Gmail.includes("@gmail.com")) {
      showError("Hmm... That doesn't look like a valid Gmail address. Please check again.");
      return setLoading(false);
    }
    
    const isAlready = authMail.filter(item => item.Gmail === data.Gmail);
    if (isAlready.length > 0) {
      showError("You've already submitted a review with this email. Thank you for your feedback!");
      return setLoading(false);
    }
    
    if (data.FeedBack.length < 100) {
      showError("Please share a bit more! Your feedback must be at least 100 characters long.");
      return setLoading(false);
    }

    try {
      const docRef = await addDoc(collection(db, "Reviews"), data);
      console.log("Document written with ID: ", docRef.id);
      showSuccess("You are feedback updated successfully and thankyou ❤️")
      ResetForm();
    } catch (error) {
      console.error("Error adding document: ", error);
      showError("Something went wrong while submitting.");
    } finally {
      setLoading(false);
    }
  };

  const ResetForm = () => {
    NameRef.current.value = "";
    GmailRef.current.value = "";
    FeedBackRef.current.value = "";
    PersonRef.current.value = "";
    setStar(stars);
    setImg(null);
    setUpdatedReview(prev => !prev);
    setViewImg(false);
  };

  const classNameInput = `pl-2 flex-grow my-1 border-2 rounded placeholder:text-black placeholder:pl-2 h-8 mx-2
    ${theme ? "border-black text-black" : "border-black text-black"}`;

  return (
    <div className="grid md:mx-1 w-full md:flex flex-col px-1 lg:px-10">
     {error && (
  <motion.p
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -80, opacity: 0 }}
    className={`fixed top-[20%] left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-xl shadow-lg font-medium z-50 ${
      theme ? "shadow-blue-400" : "shadow-gray-400"
    }`}
  >
    ⚠️ {error}
  </motion.p>
)}

{success && (
  <motion.p
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -80, opacity: 0 }}
    className={`fixed top-[20%] left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-xl shadow-lg font-medium z-50 ${
      theme ? "shadow-blue-300" : "shadow-gray-500"
    }`}
  >
    ✅ {success}
  </motion.p>
)}


      <h1 className="text-center text-2xl font-semibold mt-2">Write a Review❤️</h1>

      <Review_Star className={"md:justify-self-end"} star={star} stars={stars} setStar={setStar} />

      <input type="text" placeholder="Enter a Name" className={classNameInput} ref={NameRef} />
      <input type="email" placeholder="Enter an Email Address" className={classNameInput} ref={GmailRef} />
      <input type="text" placeholder="You are my...(Ex : Student, Junior...)" className={classNameInput} ref={PersonRef} />
      <textarea
        placeholder="Enter feedback and give me an honest review"
        ref={FeedBackRef}
        className={`pl-4 md:flex-grow mx-2 h-20 my-1 rounded-md border-2 placeholder:text-black text-black ${
          theme ? "border-black" : "border-black"
        }`}
      ></textarea>

      <button
        onClick={HandleSubmit}
        disabled={loading}
        className={`my-2 py-1 px-4 mx-2 rounded-md text-md cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 ${
          loading ? "bg-orange-300 cursor-not-allowed" : "bg-orange-600 "
        }`}
        type="submit"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            Posting...
          </>
        ) : (
          "Post Now"
        )}
      </button>
    </div>
  );
}
