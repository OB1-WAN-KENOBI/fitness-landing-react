import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormType } from "@/utils/contactSchema";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Heading from "@/utils/Heading";
import TextInput from "@/components/formElement/TextInput";
import { motion } from "framer-motion";
import { baseMotion, slideLeft, slideRight } from "@/utils/motionPresets";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("Form submit with data", data);
    setTimeout(() => {
      alert("Thank you for your message!");
      reset();
    }, 1000);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        {...baseMotion}
        transition={{ duration: 0.8 }}
        variants={slideLeft}
        className="md:w-3/5"
      >
        <Heading>
          <span className="text-primary-500">JOIN NOW</span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Push your limits, stay consistent, and transform your body with our
          expert guidance.
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.8 }}
          variants={slideRight}
          className="mt-10 basis-3/5 md:mt-10"
        >
          <form className="relative z-[2]" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="NAME"
              register={register("name")}
              error={errors.message}
            />
            <TextInput
              type="email"
              placeholder="EMAIL"
              register={register("email")}
              error={errors.message}
            />
            <TextInput
              className="resize-none"
              type="textarea"
              placeholder="MESSAHE"
              register={register("message")}
              error={errors.message}
            />
            <button
              className="cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 animate hover:text-white"
              type="submit"
            >
              submit
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                Your message has been sent successfully!
              </motion.p>
            )}
          </form>
        </motion.div>
        <motion.div
          {...baseMotion}
          transition={{ duration: 0.8 }}
          variants={slideRight}
          className="mt-10 basis-2/5 md:mt-10"
        >
          <div
            className="w-full relative before:absolute
          before:-bottom-20 before:-right-10 before:z-[1]
          md:before:content-(--content-evolvetext)
          "
          >
            <img
              className="w-full relative z-[2]"
              src={ContactUsPageGraphic}
              alt="ContactUsPageGraphic"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
