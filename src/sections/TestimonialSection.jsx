import React from "react";
import memojiAvatar1 from "../assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "../assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "../assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "../assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "../assets/images/memoji-avatar-5.png";
import grainImage from "../assets/images/grain.jpg";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";

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
      <div className="py-16 lg:py-24">
        <div className="container mx-auto">
          <SectionHeader
            eyebrow="Happy Clients"
            title="What Clients Say About Me"
            description=" Don't just take my word for it. See what my clients say about my
            work."
          />
          <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-8 flex-none">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs md:max-w-md md:p-8 "
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
