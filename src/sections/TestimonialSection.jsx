import React from 'react'
import memojiAvatar1 from "../assets/images/memoji-avatar-1.png"
import memojiAvatar2 from "../assets/images/memoji-avatar-2.png"
import memojiAvatar3 from "../assets/images/memoji-avatar-3.png"
import memojiAvatar4 from "../assets/images/memoji-avatar-4.png"
import memojiAvatar5 from "../assets/images/memoji-avatar-5.png"


const testimonials = [
    {
      name: "Alice Johnson",
      position: "Frontend Developer",
      text: "The UI/UX was spot-on! The entire process was smooth and professional from start to finish.",
      avatar: memojiAvatar1,
    },
    {
      name: "Mark Thompson",
      position: "Project Manager",
      text: "Delivered everything on time with great communication. Highly impressed with the quality of work.",
      avatar: memojiAvatar2,
    },
    {
      name: "Lisa Ray",
      position: "UI/UX Designer",
      text: "Beautiful designs and clean code. The team is very creative and easy to work with.",
      avatar: memojiAvatar3,
    },
    {
      name: "James Smith",
      position: "CTO, StartupX",
      text: "One of the best development experiences I've had. Professional, efficient, and reliable.",
      avatar: memojiAvatar4,
    },
    {
        name: "James Smith",
        position: "CTO, StartupX",
        text: "One of the best development experiences I've had. Professional, efficient, and reliable.",
        avatar: memojiAvatar5,
      },
  ];
  


const TestimonialSection = () => {
  return (
    <>
      <div>
        <p>Happy Clients</p>
        <h2>What Clients Say About Me</h2>
        <p>Don't just take my word for it. See what my clients say about my work.</p>
        <div>
            {testimonials.map(testimonial=>(
                <div key={testimonial.name}>
                     <img src={testimonial.avatar} alt={testimonial.name} />
                     <div>{testimonial.name}</div>
                     <div></div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TestimonialSection