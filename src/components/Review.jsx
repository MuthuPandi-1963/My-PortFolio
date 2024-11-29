import { useContext , useEffect, useState } from "react";
import getTimeAgo from "../firebase/time";
import { Star, Star_fill } from "../icons/Icon";
import ThemeContext from "../context/themeContext";
import { query, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

const data = [
    {
        Name: "Pandi",
        Gmail: "pandi@gmail.com",
        Rating: 5,
        FeedBack: "The service provided was exceptional. The team was very professional, and the results exceeded my expectations. I highly recommend this to anyone looking for quality service. Definitely worth it!",
        Image: "coder.avif",
        Date: { seconds: 1732781627, nanoseconds: 579000000 },
        PersonStatus: "client"
    },
    {
        Name: "Ravi",
        Gmail: "ravi@gmail.com",
        Rating: 4,
        FeedBack: "Great experience overall. The product worked as expected, though there were minor delays in delivery. The support team was helpful in resolving the issue. Would use the service again.",
        Image: "ecommerce.jpg",
        Date: { seconds: 1732795221, nanoseconds: 123000000 },
        PersonStatus: "co-worker"
    },
    {
        Name: "Amit",
        Gmail: "amit@gmail.com",
        Rating: 3,
        FeedBack: "The product was decent but didn’t meet all my expectations. Customer support was responsive, but the product could use some improvements. Hoping for a better experience next time.",
        Image: "instagram.jpg",
        Date: { seconds: 1732809825, nanoseconds: 987000000 },
        PersonStatus: "junior"
    },
    {
        Name: "Shivani",
        Gmail: "shivani@gmail.com",
        Rating: 4,
        FeedBack: "Good service and quality, but I faced a few minor technical issues initially. Once addressed, everything worked smoothly. I would recommend it for anyone looking for reliable solutions.",
        Image: "Me.jpg",
        Date: { seconds: 1732845629, nanoseconds: 456000000 },
        PersonStatus: "senior"
    },
    {
        Name: "Rani",
        Gmail: "rani@gmail.com",
        Rating: 5,
        FeedBack: "Amazing service! I was impressed by the quick response and the professionalism shown. Everything was delivered on time and met my expectations. I will definitely be using this again.",
        Image: "Meduke.jpg",
        Date: { seconds: 1732903423, nanoseconds: 789000000 },
        PersonStatus: "student"
    },
    {
        Name: "Amitabh",
        Gmail: "amitabh@gmail.com",
        Rating: 2,
        FeedBack: "I wasn’t satisfied with the product. It didn’t work as expected and I had to wait longer for a resolution. The service could definitely improve in terms of responsiveness and quality.",
        Image: "youtube.jpg",
        Date: { seconds: 1732917234, nanoseconds: 101000000 },
        PersonStatus: "client"
    },
    {
        Name: "Neha",
        Gmail: "neha@gmail.com",
        Rating: 5,
        FeedBack: "Excellent service! I was thoroughly impressed by the attention to detail and the efficiency with which my request was handled. The team was always available to assist and the outcome was flawless.",
        Image: "coder.avif",
        Date: { seconds: 1732938945, nanoseconds: 654000000 },
        PersonStatus: "co-worker"
    },
    {
        Name: "Suresh",
        Gmail: "suresh@gmail.com",
        Rating: 3,
        FeedBack: "The service was okay, but I experienced some issues with the product that took longer than expected to resolve. However, once fixed, everything worked well. I hope the process becomes smoother in the future.",
        Image: "ecommerce.jpg",
        Date: { seconds: 1732970156, nanoseconds: 321000000 },
        PersonStatus: "junior"
    },
    {
        Name: "Geeta",
        Gmail: "geeta@gmail.com",
        Rating: 4,
        FeedBack: "Good experience overall. The service was timely, and the product met most of my needs. There are minor areas for improvement, but I would still recommend it to others based on my experience.",
        Image: "instagram.jpg",
        Date: { seconds: 1733004567, nanoseconds: 888000000 },
        PersonStatus: "senior"
    },
    {
        Name: "Karan",
        Gmail: "karan@gmail.com",
        Rating: 5,
        FeedBack: "I am very happy with the service. The team was responsive and professional, and everything was delivered as promised. I had no issues throughout the process and would happily use this service again.",
        Image: "Me.jpg",
        Date: { seconds: 1733056789, nanoseconds: 112000000 },
        PersonStatus: "student"
    }
];

console.log(data);

export default function Review({updateReview,setAuthEmail}) {
    const {theme} = useContext(ThemeContext)
    const [review,setReview]=useState([])
    useEffect(()=>{
        async function GetData() {
            const q = query(collection(db, "Reviews"));
            const querySnapshot = await getDocs(q);
            const ReviewsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setReview(ReviewsData);
            setAuthEmail(ReviewsData)
        }
        GetData()
      },[updateReview])
      console.log(review);
      
    return (
        <div className="my-10 w-[95%] mx-auto">
            <h1 className="text-3xl text-center md:text-5xl font-bold font-serif md:my-12 w-full my-2">What Our Pupils and Juniors Says</h1>
            <div className="flex overflow-x-auto gap-x-8  ">
                {review.map(({Name,Gmail,Rating,FeedBack,Image,Date,PersonStatus},id)=>{
                    let ratingArray=[]
                    for (let i = 1; i <= 5; i++) {
                        if(i<=Rating) ratingArray.push(true)
                        else ratingArray.push(false)
                    }
                    console.log(Image);
                    
                
                return(
                    <div className={`${theme ? 'shadow-md shadow-blue-500 border-gray-500' : 'shadow-lg shadow-slate-600'} p-6 rounded-xl my-2 ml-2`} key={id}>
                        <div className="flex flex-nowrap items-center justify-between ">
                            <div className="flex gap-x-4 items-center">
                            <img src={Image} alt="Image" className="w-10 h-10 rounded-[50%] object-cover" />
                            <div className="grid gap-0 content-start">
                                <p className="text-xl md:text-2xl font-bold font-serif">{Name}</p>
                                <p className="text-sm md:text-base tracking-tighter pl-1 font-semibold">{PersonStatus}</p>
                            </div>
                            </div>
                            <div className="rating flex">
                                {ratingArray.map((item,id)=>{
                                    if(item==true) return <Star_fill key={id} color={"Orange"}/>
                                    else return <Star key={id}/>
                                })}
                            </div>
                        </div>
                            <p className="w-64 md:w-96 py-4 text-justify tracking-tighter">{FeedBack}</p>
                        <p className="text-right font-bold">{getTimeAgo(Date)}</p>
                    </div>
)})}
            </div>
        </div>
    )
};

// export function Ratings(rating){
//     let rating =""
//     for (let i = 1; i <= 5; i++) {
//         if(i<=rating){
//             rating+=<Star_fill/>
//         }else{
//             rating+=<Star/>
//         }
        
//     }
//     console.log(rating);
    
//     return(
//         rating
//     )
// }
// Ratings(4)