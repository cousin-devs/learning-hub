import { Button } from "@/components/ui/button"

interface MentorCardProps {
  name: string
  bio: string
  fields: string[]
  calendlyLink: string
}

export default function MentorCard({ name, bio, fields, calendlyLink }: MentorCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-green-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Fields of Interest:</h4>
          <div className="flex flex-wrap gap-2">
            {fields.map((field, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                {field}
              </span>
            ))}
          </div>
        </div>
        <Button className="w-full" asChild>
          <a href={calendlyLink} target="_blank" rel="noopener noreferrer">
            Schedule a Session
          </a>
        </Button>
      </div>
    </div>
  )
}

