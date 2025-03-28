"use client"

import Image from "next/image"
import Marquee from "react-fast-marquee"
import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa"

const members = [
  {
    image: "/secy.png",
    email: "mailto:kartik@example.com",
    instagram: "https://instagram.com/kartik",
    linkedin: "https://linkedin.com/in/kartik",
  },
  {
    image: "/3.png",
    email: "mailto:aviral@example.com",
    instagram: "https://instagram.com/aviral",
    linkedin: "https://linkedin.com/in/aviral",
  },
  {
    image: "/4.png",
    email: "mailto:rohit@example.com",
    instagram: "https://instagram.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
  },
  {
    image: "/5.png",
    email: "mailto:kartik@example.com",
    instagram: "https://instagram.com/kartik",
    linkedin: "https://linkedin.com/in/kartik",
  },
  {
    image: "/6.png",
    email: "mailto:aviral@example.com",
    instagram: "https://instagram.com/aviral",
    linkedin: "https://linkedin.com/in/aviral",
  },
  {
    image: "/7.png",
    email: "mailto:rohit@example.com",
    instagram: "https://instagram.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
  },
  {
    image: "/8.png",
    email: "mailto:rohit@example.com",
    instagram: "https://instagram.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
  },
  {
    image: "/9.png",
    email: "mailto:rohit@example.com",
    instagram: "https://instagram.com/rohit",
    linkedin: "https://linkedin.com/in/rohit",
  },
]

const Crew = () => {
  return (
    <section id="crew" className="bg-black text-white py-12">
      <div className="text-center mb-10">
        <h2 className="uppercase text-bold text-5xl text-center text-yellow-500 font-bold drop-shadow-[0_0_4px_rgba(255,255,0,0.4)] mb-6">
          The Crew
        </h2>
        <p className="text-gray-400">People who make the magic happen</p>
      </div>
      <Marquee gradient={false} speed={40} pauseOnHover>
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center mx-6 relative">
            <Image
              src={member.image || "/placeholder.svg"}
              alt="Team member"
              width={250}
              height={250}
              className="object-cover rounded-full"
            />
            <div className="flex space-x-3 absolute bottom-10 bg-black/70 px-3 py-1 rounded-full">
              <a href={member.email} target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="text-gray-300 hover:text-blue-500 text-2xl" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-300 hover:text-pink-500 text-2xl" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-300 hover:text-blue-700 text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Crew


