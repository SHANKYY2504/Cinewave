"use client";

import { motion } from "framer-motion";
import { FaMapSigns, FaPaperPlane, FaYoutube, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "+91 95115 21693";

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contactus" className="relative z-30">
      <motion.div
        className="bg-black text-white py-16 pt-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="uppercase text-bold text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-12">
          Contact us
        </h2>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center gap-16 mt-32">
            <motion.div
              className="bg-gray-900 p-10 flex flex-col items-center w-full md:w-1/2 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaMapSigns className="text-4xl text-gray-400 mb-3" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-400 mt-2 text-lg">Cinewave@gmail.com</p>
            </motion.div>

            <motion.div
              className="bg-gray-900 p-10 flex flex-col items-center w-full md:w-1/2 rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FaPaperPlane className="text-4xl text-gray-400 mb-3" />
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-400 mt-2 text-lg text-center">
                Indian Institute of Technology Bhubaneswar, Odisha, India - 752050
              </p>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-32 flex-wrap">
          {[
            { 
              icon: <FaYoutube />, 
              delay: 0.2, 
              color: "text-red-500",
              link: "https://youtube.com/@cinewave?si=1Hbtt2m1SLoMqmTH"
            },
            { 
              icon: <FaInstagram />, 
              delay: 0.3, 
              color: "text-pink-500",
              link: "https://www.instagram.com/cinewaveiitbbs?igsh=ZXczanllcWtldzY0"
            },
            { 
              icon: <FaLinkedin />, 
              delay: 0.4, 
              color: "text-blue-500",
              link: "https://www.linkedin.com/company/cinewave/"
            },
            { 
              icon: <SiGmail />, 
              delay: 0.5, 
              color: "text-red-500",
              link: "mailto:Secycinesoc.sg@iitbbs.ac.in"
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: social.delay }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className={`text-3xl text-gray-400 hover:${social.color} cursor-pointer`}>
                {social.icon}
              </div>
            </motion.a>
          ))}

          {/* Phone number with copy functionality */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div 
              className="text-3xl text-gray-400 hover:text-green-500 cursor-pointer relative"
              onClick={copyPhoneNumber}
            >
              <FaPhone />
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </div>
           
          </motion.div>
        </div>

        <motion.div
          className="text-center text-gray-400 text-base mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          Made with ❤️ by Shashank Jha for Cinewave
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;