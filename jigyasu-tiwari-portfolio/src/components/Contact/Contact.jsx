// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();
//   const [isSent, setIsSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_axbtt7a",  // Replace with your EmailJS Service ID
//         "template_1ziboq3",  // Replace with your EmailJS Template ID
//         form.current,
//         "Rz7W9pVF0HdDryNNL"  // Replace with your EmailJS Public Key
//       )
//       .then(
//         () => {
//           setIsSent(true);
//           form.current.reset(); // Reset form fields after sending
//           toast.success("Message sent successfully! ✅", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         },
//         (error) => {
//           console.error("Error sending message:", error);
//           toast.error("Failed to send message. Please try again.", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//           });
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
//     >
//       {/* Toast Container */}
//       <ToastContainer />

//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">CONTACT</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           I’d love to hear from you—reach out for any opportunities or questions!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
//         <h3 className="text-xl font-semibold text-white text-center">
//           Connect With Me <span className="ml-1">🚀</span>
//         </h3>

//         <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="user_name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             rows="4"
//             required
//             className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           {/* Send Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c9olqgb", // Your EmailJS Service ID
        "template_4vppung", // Your EmailJS Template ID
        form.current,
        "zarCKHpV0IieeBcjD", // Your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl text-white">
        {/* Email */}
        <div className="flex flex-col items-center bg-[#0d081f] p-6 rounded-lg shadow-md border border-gray-700 hover:border-purple-500 transition">
          <MdEmail className="text-4xl text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold mb-1">Email</h4>
          <p className="text-gray-300 text-center text-sm sm:text-base">
            jigyasu.tiwarii@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-[#0d081f] p-6 rounded-lg shadow-md border border-gray-700 hover:border-purple-500 transition">
          <MdPhone className="text-4xl text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold mb-1">Phone</h4>
          <p className="text-gray-300 text-center text-sm sm:text-base">
            +91 8546093296
          </p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-[#0d081f] p-6 rounded-lg shadow-md border border-gray-700 hover:border-purple-500 transition">
          <MdLocationOn className="text-4xl text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold mb-1">Address</h4>
          <p className="text-gray-300 text-center text-sm sm:text-base">
            Delhi,East Of Kialash, India
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
/>


          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
  type="text"
  name="number"
  placeholder="Enter your number"
  required
  inputMode="numeric"
  pattern="[0-9]{10}"
  maxLength="10"
  onInput={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only digits
  }}
  className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
/>


          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-[linear-gradient(to_right,#9333ea,#ec4899)] py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
