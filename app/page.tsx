import Header from '../components/Header'
import Hero from '../components/Hero'
import MentorsList from '../components/MentorsList'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MentorsList />
      </main>
      <Footer />
    </div>
  )
}

