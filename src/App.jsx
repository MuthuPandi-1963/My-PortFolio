import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
import Project from "./components/Projects";
import { NavMenu } from "./components/SideBar";
import Skills from "./components/Skills";
import Star from "./components/Star";
import Theme from "./components/Theme";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db, storage } from "./firebase/firebaseconfig";

// Images Array
const images = [
  "avatar-1.png", "avatar-2.png", "avatar-3.png", "avatar-4.png",
  "avatar-5.png", "avatar-6.png", "avatar-7.png", "avatar-8.png",
  "avatar-9.png", "avatar-10.png", "avatar-11.png", "avatar-12.png",
  "avatar-13.png", "avatar-14.png", "avatar-15.png", "avatar-16.png",
  "avatar-17.png", "avatar-18.png", "image-1.jpg", "image-2.jpg",
  "image-3.jpg", "image-4.jpg", "image-5.jpg", "image-6.jpg",
  "image-7.jpg", "image-8.jpg", "image-9.jpg", "image-10.jpg",
  "image-11.jpg", "image-12.jpg", "image-13.jpg", "image-14.jpg",
  "image-15.jpg", "image-16.jpg"
];

export default function App() {
  // Function to Upload Images and Save URLs
  async function uploadImagesToFirestore() {
    for (const imageName of images) {
      try {
        // Adjust the path if the images are stored in `public/avatar`
        const filePath = `/avatar/${imageName}`;
        const response = await fetch(filePath);

        if (!response.ok) {
          throw new Error(`Failed to fetch image: ${imageName}`);
        }

        const blob = await response.blob(); // Convert to a blob for upload

        // Upload to Firebase Storage
        const storageRef = ref(storage, `avatar/${imageName}`);
        await uploadBytes(storageRef, blob);

        // Get Download URL
        const downloadURL = await getDownloadURL(storageRef);

        // Save URL to Firestore
        const avatarsCollection = collection(db, "avatars");
        await addDoc(avatarsCollection, {
          name: imageName,
          url: downloadURL,
          uploadedAt: Timestamp.now(), // Timestamp for upload time
        });

        console.log(`Uploaded and saved: ${imageName}`);
      } catch (error) {
        console.error(`Failed to upload ${imageName}:`, error);
      }
    }
  }

  // Call the upload function
  // uploadImagesToFirestore();

  return (
    <Theme>
      <div className="sticky top-0 bg-inherit pb-3 pt-2 z-10">
        <NavBar />
        <NavMenu />
      </div>
      <About />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <Star />
    </Theme>
  );
}
