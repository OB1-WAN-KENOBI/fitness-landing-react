import Heading from "@/utils/Heading";
import ClassesSlider from "./ClassesSlider";
import { baseMotion, slideLeft } from "@/utils/motionPresets";
import { motion } from "framer-motion";



const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100">
      <div className="mx-auto w-5/6 p-5">
        <motion.div 
        {...baseMotion}
        transition={{duration: 0.9}}
        variants={slideLeft}
        className="md:w-3/5">
          <Heading>OUR CLASSES</Heading>
          <p className="py-5 text-gray-700">
            Explore a variety of weight training classes designed to help you
            build strength, improve endurance, and achieve your fitness goals.
            Our certified trainers guide you through safe and effective workouts
            for all experience levels.
          </p>
        </motion.div>
      </div>
      <div className="mt-10 w-full">
        <ClassesSlider/>
      </div>
    </section>
  );
};

export default OurClasses;
