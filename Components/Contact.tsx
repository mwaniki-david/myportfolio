"use client";
import React from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="Contact"
      ref={ref}
      className="px-6 md:p-[100px] lg:px-[180px]  md:px-[100px] gap-3"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="font-bold text-[40px] md:text-[45px] py-5 ">
      <SectionHeading >CONTACT ME.</SectionHeading>
      </div>


      <p className="text-gray-700 -mt-6 dark:text-white/80 text-center font-bold text-[18px] px-4 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
        Davidnguremwaniki@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black gap-2"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
// "use client";

// import React from "react";
// import SectionHeading from "./Section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { sendEmail } from "@/actions/sendEmail";
// import SubmitBtn from "./submit-btn";
// import toast from "react-hot-toast";

// export default function Contact() {
//   const { ref } = useSectionInView("Contact");

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
//       initial={{
//         opacity: 0,
//       }}
//       whileInView={{
//         opacity: 1,
//       }}
//       transition={{
//         duration: 1,
//       }}
//       viewport={{
//         once: true,
//       }}
//     >
//       <SectionHeading>Contact me</SectionHeading>

//       <p className="text-gray-700 -mt-6 dark:text-white/80">
//         Please contact me directly at{" "}
//         <a className="underline" href="mailto:example@gmail.com">
//           example@gmail.com
//         </a>{" "}
//         or through this form.
//       </p>

//       <form
//         className="mt-10 flex flex-col dark:text-black"
//         action={async (formData) => {
//           const { data, error } = await sendEmail(formData);

//           if (error) {
//             toast.error(error);
//             return;
//           }

//           toast.success("Email sent successfully!");
//         }}
//       >
//         <input
//           className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="senderEmail"
//           type="email"
//           required
//           maxLength={500}
//           placeholder="Your email"
//         />
//         <textarea
//           className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
//           name="message"
//           placeholder="Your message"
//           required
//           maxLength={5000}
//         />
//         <SubmitBtn />
//       </form>
//     </motion.section>
//   );
// }

// 'use client'


// import { FormEvent, useState } from 'react'
// import Confetti from 'react-confetti'

// export const Contact = () => {
//   const [isSubmitted, setSubmitted] = useState(false)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault()

//     try {
//       const res = await fetch('api/contact', {
//         method: 'POST',
//         body: JSON.stringify({
//           name,
//           email,
//           message,
//         }),
//         headers: {
//           'content-type': 'application/json',
//         },
//       })
//       if (res.status === 200) {
//         setSubmitted(true)
//       }
//     } catch (err: any) {
//       console.error('Err', err)
//     }
//   }

//   return isSubmitted ? (
//     <div>
//       <h1
//         className="text-center font-semibold text-3xl
//       "
//       >
//         Thank you for your message!
//       </h1>
//       <Confetti />
//     </div>
//   ) : (
//     <form onSubmit={onSubmit} id='Contact' className="flex flex-col gap-1 items-center justify-center mt-[70px] pt-[70px] py-8 px-4 ">
//       <div className='font-bold text-[40px] md:text-[45px]'>CONTACT ME</div>
//       <div className=" py-4 ">
//         <label className="label font-semibold px-3 py-4">
//           <span className="label-text">Full Name</span>
//         </label>
//         <input
//           className="input w-full input-bordered input-primary md:px-12 px-6 py-3 rounded-lg text-black"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="your Name"
//         />
//       </div>
//       <div className="  px-4 py-5">
//         <label className="label font-semibold px-3 py-4">
//           <span className="label-text">Email</span>
//         </label>
//         <input
//           className="input w-full input-bordered input-primary rounded-lg px-6 md:px-12 py-3 text-black"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="name@example.com"
//         />
//       </div>
//       <div className="py-2" >
//         <label className="label font-semibold">
//           <span className="label-text">Message</span>
//         </label>
//         <textarea
//           className="textarea w-full textarea-primary rounded-lg px-6 lg:px-12 py-10 text-black"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//       </div>
//       <button className="btn btn-primary px-6 py-3 bg-purple-900 rounded-lg " type="submit">
//         Submit
//       </button>
//     </form>
//   )
// }


// import React from 'react'
// import input from 'postcss/lib/input'

// const Contact = () => {
//   return (
//     <div id='Contact' className='h-auto w-screen  px-4 py-5'>
//       <div className='flex items-center justify-center px-6 py-8 pt-[5px] lg:mt-16'>
//         <div className='flex flex-col items-center justify-center  px-5 py-6 gap-8 h-full'>
//           <div className='font-bold text-[40px] md:text-[45px]'>
//             CONTACT ME
//           </div>
//         <form className=" flex flex-col w-full gap-[50px]">
//           <div className="flex items-center border-b border-white py-2">
//             <input className="appearance-none bg-transparent border-none w-full text-white mr-[220px] py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name:" aria-label="Full name"/>
//           </div>
//           <div className="flex items-center border-b border-white py-2">
//             <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email:" aria-label="Full name"/>
//           </div>
//           <div className="flex items-center border-b border-white py-2 ">
//             <input className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Message:" aria-label="Full name"/>
//           </div>
//         </form>
//         <div>
//         <button className='items-center flex px-12 py-2 rounded-full border border-white bg-purple-600 hover:bg-purple-900 shadow-lg shadow-purple-900 '>
//             Send message
//             </button>
//         </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact
