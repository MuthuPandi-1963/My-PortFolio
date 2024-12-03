import { useContext, useState, useEffect } from "react";
import ThemeContext from "../ColorTheme/themeContext.jsx";
import Review_Show from './Review_Show.jsx';
import Review_Form from './Review_Form.jsx';
import { collection, getDocs, query } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase/firebaseconfig.js";

export default function Review() {
  const [img, setImg] = useState(null);
  const [storedImg, setStoredImg] = useState([]);
  const { theme } = useContext(ThemeContext);
  const [updateReview, setUpdatedReview] = useState(false);
  const [authEmail, setAuthEmail] = useState(null);
  const [viewImg, setViewImg] = useState(false);
  
  async function handleImgChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        setTimeout(() => setError(null), 3500);
        return;
      }

      try {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        console.log(downloadURL);
        
        setImg(downloadURL);
        HandlePickingImg(downloadURL);
      } catch (error) {
        console.log(error);
        
        setError("Error uploading image. Please try again.");
        setTimeout(() => setError(null), 3500);
      }
    }
  }

  function HandlePickingImg(url) {
    setImg(url);
  }
  useEffect(() => {
    async function fetchAvatars() {
      try {
        const q = query(collection(db, "avatars"));
        const querySnapshot = await getDocs(q);
        const images = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStoredImg(images);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    }

    fetchAvatars();
  }, []);
  const profileImgClassName = `rounded-full object-center  hover:box-shadow-lg-dark hover:opacity-60 w-96  h-72 rounded-xl justify-self-center md:w-full`;
  const profileBtnClassName = `rounded-full justify-self-center ${
    theme
      ? "shadow-md hover:shadow-blue-700 border-gray-500"
      : "hover:box-shadow-lg-dark "
  } `;
  return (
    <>
      <div
        className={`w-[80%] mx-auto rounded-lg my-4  md:p-6 py-8  border ${
          theme
            ? "shadow-md shadow-blue-500 border-gray-500"
            : "shadow-lg shadow-slate-600"
        }`}
      >
        <div className="w-full mx-auto md:flex md:h-[400px] ">
          <div className="grid lg:w-[40%] sm:w-full  md:h-[400px]">
            <div className="justify-self-center flex items-center gap-x-4">
              <p className="text-base md:xl xl:text-2xl justify-self-center  my-2 font-semibold">
                {!viewImg ? "Choose Profile Picture" : "Remove"}
              </p>
              <button
                className="down justify-self-center rounded-xl"
                onClick={() => {
                  setViewImg((prev) => !prev);
                  setImg(null);
                }}
              >
                {!viewImg ? (
                  <img src="Icons/down.svg" alt="Dropdown Icon" />
                ) : (
                  <img src="Icons/wrong.svg" alt="wrong Icon" />
                )}
              </button>
            </div>
            {viewImg && !img ? (
              <div className="w-[80%] md:w-60 mx-auto lg:w-full h-80  justify-center md:h-[300px] my-2 rounded-xl p-2 shadow-lg shadow-blue-500 flex items-center gap-3 flex-wrap overflow-y-scroll">
                <div className="grid place-content-start h-16 place-items-center">
                  <label
                    htmlFor="file-upload"
                    className={`w-16 grid place-content-center h-16 rounded-full p-0 m-0 items-center justify-center text-[10px] text-center font-bold cursor-pointer shadow-md ${
                      theme ? "bg-gray-600 text-black" : "bg-gray-300 text-black"
                    } hover:bg-blue-600`}
                  >
                    <p className="text-[10px]">add  Yours </p><p className="text-2xl">+</p>
                  </label>

                  <input
                    type="file"
                    id="file-upload"
                    accept="image/*"
                    onChange={(e)=>handleImgChange(e)}
                    className="hidden"
                  />
                  </div>
                {storedImg.map(({ name = "Avatar", url = "" }, id) => (
                  <button
                    key={id}
                    className={profileBtnClassName}
                    onClick={() => HandlePickingImg(url)}
                  >
                    <img
                      src={url}
                      alt={name}
                      className="w-16 h-16 rounded-full "
                    />
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={() => setViewImg((prev) => !prev)}
                className="w-[80%] lg:w-full  md:h-[300px] mx-auto my-2 rounded-xl p-2 bg-transparent"
              >
                <img
                  src={`${img ? img : 'https://firebasestorage.googleapis.com/v0/b/dummy-59bd8.firebasestorage.app/o/coder.png?alt=media&token=25975aba-a4b2-4643-95ef-e9b8f50b9ff3'}`}
                  alt="Coder"
                  className={profileImgClassName}
                />
              </button>
            )}
          </div>
          <Review_Form
            img={img}
            AuthEmail={authEmail}
            setImg={setImg}
            setUpdatedReview={setUpdatedReview}
            authMail={authEmail}
            setViewImg={setViewImg}
          />    
        </div>
      </div>
      <Review_Show updateReview={updateReview} setAuthEmail={setAuthEmail} />
    </>
  );
}
