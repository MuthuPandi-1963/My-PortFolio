import React, { useEffect, useState } from "react";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import { NavMenu } from "./components/SideBar";
import Skills from "./components/Skills";
import Theme from "./components/Theme";
import { Contact } from "./components/Contact";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

import ReviewForm from "./components/reviewForm";

export default function App() {
  const [update,setUpdate]=useState(false)
  const ReviewsData = []
  async function HandleClick() {

    for(const {Name,FeedBack,Image,Rating,Gmail} of data){
      await addDoc(collection(db, "Reviews"), {
        Name,
        Gmail,
        Rating,
        FeedBack,
        Image,
        Date: new Date(),
      });
    }
    setUpdate((prev)=>!prev)
    
  }
  
  // console.log(ReviewsData);
  

  return (
    <Theme>
      <div className="sticky top-0 bg-inherit pb-3 pt-2 z-10 ">
        <NavBar />
        <NavMenu />
      </div>
      <About />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      {/* <Contact /> */}
      <ReviewForm/>

      {/* Review Submission Form */}
      {/* <button onClick={HandleClick}>Submit</button>
      <button onClick={()=>setUpdate((prevUpdate)=>!prevUpdate)}>Get Data</button> */}      
    </Theme>
  );
}
