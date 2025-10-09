import ActionButton from "@/utils/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import { sponsorImages } from "@/utils/sponsorImages"

const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unleash your potential with our state-of-the-art fitness equipment
              and expert guidance. Join us to transform your body and mind in a
              supportive community.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton to="contactus" variant="link">
              Join Now
            </ActionButton>
            <ActionButton
              to="contactus"
              variant="link"
              className="rounded-md bg-primary-500 px-10 py-2 cursor-pointer hover:bg-secondary-500 animate hover:text-white"
            >
              Learn More
            </ActionButton>
          </motion.div>
        </div>
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="HomePageGraphic" />
        </motion.div>
      </div>
      <div className="h-[150px] w-full bg-primary-100 py-10 ">
        <div className="mx-auto w-5/6 flex items-center justify-between gap-8">
          {sponsorImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img src={image.src} alt="image.alt" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
