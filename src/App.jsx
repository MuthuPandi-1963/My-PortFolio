import AboutMe from "./components/About/AboutMe.jsx";
import Experience from "./components/Experience/Experience.jsx";
import IntroDetails from "./components/Introduction/IntroDetails";
import NavBar from "./components/NavBar/NavBar.jsx";
import Project from "./components/Project/Project.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Theme from './components/ColorTheme/Theme.jsx';
import Review from "./components/ReviewSection/Review.jsx";


export default function App() {
  return (
    <Theme>
      <NavBar/>
      <IntroDetails/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Project/>
      <Review/>
    </Theme>
  );
}
