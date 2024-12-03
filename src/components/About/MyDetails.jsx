import {motion} from 'framer-motion';
export default function MyDetails() {
  return (
    <>
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="self-start tracking-tighter mt-10 leading-relaxed md:text-[12px] lg:text-lg"
    >
      <p className="indent-6">
        <strong> Passion for Problem-Solving and Industry Experience:</strong>
        I’m a tech enthusiast who thrives on problem-solving and continuous
        learning. My journey as a full-stack developer is driven by a desire to
        build impactful, innovative web applications. With a strong foundation
        in <strong>JavaScript</strong>, <strong>Python</strong>, and{" "}
        <strong>.NET</strong>, I develop comprehensive web solutions, from user
        interfaces to complex backend logic.
        <br />
        <br />
        Currently, as a <strong>Technical Trainee</strong> at{" "}
        <strong>NetworkZ Systems</strong>, I work on environment assessments,
        solar panel installations, and team leadership. This hands-on experience
        has enhanced my skills in project management and team collaboration,
        essential for success in the tech industry.
      </p>

      <p className="indent-6 hidden md:block">
        <strong> Aspirations for Growth and Innovation:</strong>
        My goal is to continuously enhance my technical expertise, explore cloud
        technologies and machine learning, and contribute to impactful projects
        that solve real-world problems. I am also passionate about open-source
        contributions and connecting with like-minded developers to push the
        boundaries of innovation in technology.
      </p>
    </motion.div>
    </>

  )
}
