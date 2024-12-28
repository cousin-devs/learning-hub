import MentorCard from './MentorCard'

import defaultPfp from '../assets/profile-simple.svg'
import imranPfp from '../assets/personal/Imran_Profile.jpg'
import imadPfp from '../assets/personal/Imad_Profile.jpg'
import ammarPfp from '../assets/personal/Ammar_Profile.jpg'


const mentors = [
  {
    name: "Ammar Alinur",
    bio: "Experienced software engineer with a passion for teaching and Islamic studies.",
    fields: ["Computer Science", "Islamic Studies"],
    calendlyLink: "https://calendly.com/amira-hassan",
    imageUrl: ammarPfp
  },
  {
    name: "Imad Hussein",
    bio: "Business consultant and hafiz, specializing in ethical entrepreneurship.",
    fields: ["Business", "Quranic Studies"],
    calendlyLink: "https://calendly.com/omar-abdullahi",
    imageUrl: imadPfp
  },
  {
    name: "Imran Hussein",
    bio: "Medical doctor and community leader, focusing on health education in Muslim communities.",
    fields: ["Medicine", "Community Outreach"],
    calendlyLink: "https://calendly.com/fatima-ahmed",
    imageUrl: imranPfp
  }
]

export default function MentorsList() {
  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  )
}

