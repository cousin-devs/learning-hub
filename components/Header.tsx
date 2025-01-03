import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-700 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition-colors duration-300">Learning Hub</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-amber-200 transition-colors duration-300">Home</Link></li>
          <li><Link href="#mentors" className="hover:text-amber-200 transition-colors duration-300">Mentors</Link></li>
          <li><Link href="#contact" className="hover:text-amber-200 transition-colors duration-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

