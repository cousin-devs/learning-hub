import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-8">
          Are you interested in becoming a mentor or have questions about our platform? 
          We'd love to hear from you!
        </p>
        <Button asChild>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBhuypZmfduceQ6jum_n6d0y-79mZWTolLNK2bfzJxhAEl4A/viewform?usp=preview" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-800 text-white hover:bg-green-900 hover:scale-105 transition-all duration-300 ease-in-out rounded-md px-4 py-2"
          >
            Contact Us / Join as Mentor
          </a>
        </Button>
        <div className="mt-8 text-sm">
          © {new Date().getFullYear()} Habesha Mentors. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

